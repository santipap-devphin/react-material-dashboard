import React , {useState , useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Grid  , Stack , TextField , Button  , Alert , FormGroup , FormControlLabel , AlertTitle}  from '@mui/material';
import Switch from '@mui/material/Switch';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import defaultimg from "../../assets/noimg.jpg"
import endpoint from '../../api/endpoint';
import { useEffect } from 'react';

const FrmEditCategory = () => {

    let { id } = useParams();
    let navicate = useNavigate();
    const [cateName , setCateName] = useState('');
    const [cateNameEn , setCateNameEn] = useState('');
    const [cateDetail , setCateDetail] = useState('');
    const [chkSwitch , setchkSwitch] = useState(true); 
    const [imageUrl, setImageUrl] = useState(null);
    const [imgData ,setImgData] = useState('');
    const [validFrm , setValidFrm] = useState(false);
    const [callSuccess , setCallSuccess] = useState(false);
    const [statusCallApi , setStatusCallApi] = useState(false); 
    let myRef = useRef(null);
    useEffect(() => {

        const callData = async() => {

            try {

                const response = await endpoint.post(`/getcategory` , {id:id});
                console.log(response)
                if(response.data.code === 1){

                    
                    setCateName(response.data.list.catename);
                    setCateNameEn(response.data.list.catenameen)
                    setCateDetail(response.data.list.catedetail)
                    setchkSwitch(response.data.list.status)
                    setImageUrl("http://localhost:7000/"+response.data.list.imgfile)
                    setImgData(response.data.list.imgfile)
                    console.log(response)
                    setStatusCallApi(true)

                }
                
                
            } catch (err) {
                
                console.error(err)
            }


        } 
        callData();

    },[statusCallApi , id])

    const handleChange = (event) => {

        setchkSwitch(event.target.checked);
    }
    const handleConfirm = async(e) => {

        e.preventDefault();

        if(cateName && cateNameEn){

            try {
                const obj = {id:id , catename:cateName , catenameen:cateNameEn,catedetail:cateDetail, imgfile :imgData , status:chkSwitch};

                const response = await endpoint.put("/getcategory",obj);
                if(response.data.code === 1){

                    window.scrollTo({top:myRef.current.scroll , behavior: 'smooth'}) 
                    setCallSuccess(true)

                    setTimeout(function() {navicate("/category")}, 3000);

                }

                console.log(response)
                
            } catch (error) {
                console.error(error)
            }


        }else{

            setValidFrm(true)
            setTimeout(function() {setValidFrm(false)}, 2500);

        }
        


    
    }
    const changeImg =  async (e) => {

        const file = e.target.files[0];

        const reader = new FileReader();

        reader.onloadend = () => { 

            //file["namefolder"]  = "cate";
           
            setImageUrl(reader.result)
        }

        reader.readAsDataURL(file) 

         //console.log(e.target.files[0])
        if(file !== null){

            file["namefolder"]  = "cate";

            console.log("file have" , file);

            const formData = new FormData()

            formData.append('file', file)
            
            const response = await endpoint.post("/upload" , formData ,{
                headers: {
                  'Content-Type': 'multipart/form-data'
                }});

            if(response.status === 200 && response.statusText === "OK"){

                var newpath = response.data.destination + response.data.filename;
               
                if(newpath.indexOf("public/") > -1){

                    var sp = newpath.split("public/");
                    //console.log(sp[1])
                    setImgData(sp[1])
                }else{
                    setImgData(newpath)
                }
                
               

            }
            


        }
       
        

      }

  return (<>
            <Grid container sx={{m:1}}>
                <Grid item xs={4}>
                    <Link to={"/category"} style={{textDecoration: "none"}}><Button variant="contained" color="primary"><ArrowBackIcon/> ????????????</Button></Link>
                </Grid>
            </Grid>
            {console.log(statusCallApi)}
            <div ref={myRef}></div>
            <Grid container spacing={2} sx={{background:"#ffffff" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , m:1.5}}>
                <form onSubmit={handleConfirm} style={{width:"100%"}}>
                {
                  validFrm ? <Alert severity="error" sx={{m:2}}>?????????????????????????????????????????????</Alert> : null
                }
                {
                    callSuccess ? 

                     <Alert severity="success" sx={{m:2}}>
                     <AlertTitle>????????????????????????????????????????????????????????????</AlertTitle>
                     <strong>??????????????????????????????????????????????????????????????????????????????????????????????????? </strong>
                    </Alert>
                    :null
                }
                <Grid item xs={12} sx={{p:2}}>
                    <TextField 
                        id="catenameth" 
                        label="?????????????????????????????????????????????" 
                        variant="filled" 
                        value={cateName}
                        onChange={(e) => setCateName(e.target.value)}
                        fullWidth />
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <TextField 
                        id="catenameen" 
                        label="??????????????????????????????????????????????????????????????????" 
                        variant="filled" 
                        value={cateNameEn}
                        onChange={(e) => setCateNameEn(e.target.value)}
                        fullWidth />    
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <TextField 
                            id="catedetail" 
                            label="??????????????????????????????" 
                            variant="filled" 
                            multiline
                            rows={3}
                            onChange={(e) => setCateDetail(e.target.value)}
                            value={cateDetail}
                            fullWidth />    
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <Button
                        variant="contained"
                        component="label"
                        size="small"
                        sx={{mt:1 , backgroundColor:"#1976d2" , "&:hover": { backgroundColor:"#fff" , color:"#000"}}}
                        >
                                <FileUploadIcon/>
                                <input
                                id="uploadcateimg"
                                type="file"
                                onChange={(e) => changeImg(e)}
                                hidden
                                />
                            ?????????????????????
                    </Button>      
                </Grid>
                <Stack sx={{m:1}}>
                     {
                        imageUrl !== null ?  <img id="imgcate" src={imageUrl} style={{maxWidth:"30%"}} alt="?????????????????? default" />
                        :  <img id="imgcate" src={defaultimg} style={{maxWidth:"30%"}} alt="?????????????????? ????????????????????????" />
                     }
                   
                </Stack>
                <Grid item xs={12} sx={{p:2}}>
                    <FormGroup>
                        <FormControlLabel control={<Switch  checked={chkSwitch}  onChange={handleChange}  />} label="????????????????????????????????????" />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <Button variant='contained' type='submit' sx={{m:1}}>??????????????????</Button>
                        <Button variant='contained' color="error" sx={{m:1}}>??????????????????</Button>
                </Grid>
                </form>
            </Grid>
         </>
  )
}

export default FrmEditCategory