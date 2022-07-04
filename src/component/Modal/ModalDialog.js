import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {Typography, Grid , Box , Stack 
    , TextField , Button , IconButton  , DialogTitle , DialogContent ,DialogActions , Dialog , Alert
     }  from '@mui/material';
import Switch from '@mui/material/Switch';
import {styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import defaultimg from "../../assets/noimg.jpg"
export const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
    
   return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

 BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

const ModalDialog = ({open , setOpen}) => {

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const [cateName , setCateName] = useState('');
    const [cateNameEn , setCateNameEn] = useState('');
    const [cateDetail , setCateDetail] = useState('');
    const [chkSwitch , setchkSwitch] = useState(false); 

    const [validFrm , setValidFrm] = useState(false);

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
          padding: theme.spacing(2),
          width:550
        },
        '& .MuiDialogActions-root': {
          padding: theme.spacing(1),
        },
      }));

      const handleChange = (event) => {

            setchkSwitch(event.target.checked);
      }

      const handleConfirm = () => {

            
            if(cateName && cateNameEn){

              setOpen(false)

            }else{
              setValidFrm(true)
              setTimeout(function() { setValidFrm(false)}, 3000);

            }
            
      }

      const handleClose = () => {

        setOpen(false)

      }


   return ( <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
             เพิ่มข้อมูล
            </BootstrapDialogTitle>
            <DialogContent dividers>
           
             {
                  validFrm ? <Alert severity="error">กรุณากรอกข้อมูล</Alert> : null
             }
            <Stack spacing={2} direction="row" sx={{m:1}}>
               
                <TextField 
                    id="catenameth" 
                    label="ชื่อหมวดหมู่ไทย" 
                    variant="filled" 
                    value={cateName}
                    onChange={(e) => setCateName(e.target.value)}
                    fullWidth />
                
            </Stack>
            <Stack spacing={2} direction="row"  sx={{m:1}}>
                <TextField 
                    id="catenameen" 
                    label="ชื่อหมวดหมู่ภาษาอังกฤษ" 
                    variant="filled" 
                    value={cateNameEn}
                    onChange={(e) => setCateNameEn(e.target.value)}
                    fullWidth />    
                
            </Stack>
            <Stack spacing={2} direction="row"  sx={{m:1}}>
                <TextField 
                        id="catedetail" 
                        label="รายละเอียด" 
                        variant="filled" 
                        multiline
                        rows={3}
                        onChange={(e) => setCateDetail(e.target.value)}
                        fullWidth />    
                
            </Stack>
            <Stack spacing={2} direction="row"  sx={{m:1}}>
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
                              hidden
                            />
                           โหลดรูป
            </Button>
            </Stack>
            <Stack sx={{m:1}}>
                <img id="imgcate" src={defaultimg} />
            </Stack>
            <Stack spacing={2} direction="row"  sx={{m:1}}>
                <Typography variant='p' sx={{mt:0.5}}>สถานะ</Typography>
                <Switch {...label} checked={chkSwitch} onChange={handleChange} />
            </Stack>
            </DialogContent>
            <DialogActions>
            <Button autoFocus color="primary" variant="contained" onClick={handleConfirm}>
                ยืนยัน
            </Button>
            <Button onClick={handleClose} variant="contained" color="error">
                ยกเลิก
            </Button>
            </DialogActions>
        </BootstrapDialog>
    )
}

export default ModalDialog