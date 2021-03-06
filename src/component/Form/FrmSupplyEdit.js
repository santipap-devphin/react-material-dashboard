import React , {useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Grid , Button , TextField , FormGroup , FormControlLabel , Switch , Alert , AlertTitle} from '@mui/material';
import endpoint from '../../api/endpoint';

const FrmSupplyEdit = () => {

 
    const [supName , setSupName] = useState('');
    const [supCode , setSupCode] = useState('');
    const [supPrice , setSupPrice] = useState('');
    const [chkSwitch , setchkSwitch] = useState(true); 
    const [valid , setValid] = useState(false);
    const [successData , setSuccessData] = useState(false);
    const [statusCallApi , setStatusCallApi] = useState(false);
    const {id}  = useParams();

    useEffect(()=> {

        const fetchData = async () => {

                try {

                    const response = await endpoint.patch(`/supply/${id}`);
                    if(response.data.code === 1){

                        setSupName(response.data.list.supplyname)
                        setSupCode(response.data.list.supplycode)
                        setSupPrice(response.data.list.supplyprice)
                        setchkSwitch(response.data.list.status)
                        setStatusCallApi(true)
                    }
                    
                } catch (error) {
                    console.error(error)
                }

        }

        fetchData();

    } , [statusCallApi])

    const changeSwitch = () => {

        setchkSwitch(!chkSwitch);
        
    }
    const submitEdit = async(e) => {

        e.preventDefault();
        if(supName && supCode && supPrice){

            try {
                const response = await endpoint.put("/supply" , {id:id , supplyname:supName , supplycode:supCode , supplyprice:supPrice , status:chkSwitch})
                if(response.data.code === 1){

                    setSuccessData(true)
                    setTimeout(function() {setSuccessData(false)}, 3500);

                }
                
            } catch (error) {
                console.error(error)
            }
            

        }else{

            setValid(true)
            setTimeout(function() {setValid(false)}, 3500);
        }

    }

  return ( <>
            <Grid container sx={{m:1}}>
                <Grid item xs={4}>
                    <Link to={"/supply"} style={{textDecoration: "none"}}><Button variant="contained" color="primary"><ArrowBackIcon/> ????????????</Button></Link>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{background:"#ffffff" , boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" , m:1.5}}>
                <form style={{width:"100%"}} onSubmit={submitEdit}>
                {
                            valid ? 
                            <Alert severity="error" sx={{mt:2 , mr:2 , ml:2}}>
                            <AlertTitle>?????????????????????????????????????????????</AlertTitle>
                                ?????????????????????????????? <strong>???????????????????????? ????????????????????????????????????</strong>
                            </Alert>
                            :null
                }
                {
                            successData ? 
                            <Alert severity="success">
                            <AlertTitle>????????????????????????????????????????????????????????????</AlertTitle>
                                ???????????? <strong>??????????????????????????????????????????????????????????????????????????????????????????????????????</strong>
                            </Alert>
                            :null

                }
                <Grid item xs={12} sx={{p:2}}>
                        <TextField 
                            id="filled-basic" 
                            label="?????????????????????????????????????????????" 
                            variant="filled" 
                            value={supName} 
                            onChange={(e) => setSupName(e.target.value)} 
                            fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <TextField 
                            id="filled-basic" 
                            label="??????????????????????????????" 
                            variant="filled" 
                            value={supCode}
                            onChange={(e) => setSupCode(e.target.value)}
                            fullWidth/>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <TextField 
                            id="filled-basic" 
                            label="???????????????????????????" 
                            variant="filled" 
                            value={supPrice}
                            onChange={(e) =>  setSupPrice(e.target.value)}
                            fullWidth />
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={chkSwitch} onChange={changeSwitch} />} label="????????????????????????????????????" />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sx={{p:2}}>
                        <Button variant='contained' type="submit" sx={{m:1}}>??????????????????</Button>
                        <Button variant='contained' color="error" sx={{m:1}}>??????????????????</Button>
                </Grid>
                </form>
            </Grid>
         </>
  )
}

export default FrmSupplyEdit