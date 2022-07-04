import React , {useState} from 'react';
import { Typography, Grid , Box , Stack , TextField , Button , InputLabel , MenuItem , FormControl , Select , Pagination}  from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Chip from '@mui/material/Chip';
import PanelOrders from '../../component/panel/PanelOrders';




const SecMainOrders = () => {
  
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = useState(0);

  const handleChangeVal = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const changePage = () => {

  }
  return (<Grid container columnSpacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Typography variant='h5'>Orders</Typography>   
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4}>
                    <TextField id="filled-basic" label="ค้นหา" variant="filled" size="small" fullWidth />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2}>
            <FormControl variant="filled" size="small" fullWidth>
                    <InputLabel id="demo-simple-select-filled-label">สถานะ</InputLabel>
                    <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                    value={age}
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>ทั้งหมด</MenuItem>
                    <MenuItem value={20}>รอตรวจสอบ</MenuItem>
                    <MenuItem value={30}>ยกเลิก</MenuItem>
                    <MenuItem value={40}>รอจัดส่ง</MenuItem>
                 
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={2} >
                    <Button variant="contained"  sx={{width:195,height:48}}><DownloadForOfflineIcon /> Download CSV</Button>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <Box
                sx={{
                    flexGrow: 1,
                    mt:2,
                    ml:1.2,
                    mr:1.2,
                    bgcolor: 'background.paper',
                    boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d",
                    maxWidth: { xs: 400 , sm: 800 , md: "100%"}
                }}
                >
                <Tabs
                    value={value}
                    onChange={handleChangeVal}
                    variant="scrollable"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    
                    sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.3 },
                    },
                    }}
                    
                    >
                    <Tab label="ทั้งหมด" sx={{fontSize:18}} icon={<Chip color="default" label="20" />} iconPosition="end" />
                    <Tab label="รอตรวจสอบ" sx={{fontSize:18}} icon={<Chip color="info" label="10" />} iconPosition="end" />
                    <Tab label="ยกเลิก" sx={{fontSize:18}} icon={<Chip color="error" label="5" />} iconPosition="end" />
                    <Tab label="รอจัดส่ง" sx={{fontSize:18}} icon={<Chip color="primary" label="2" />} iconPosition="end" /> 
                    
            </Tabs>
            </Box>    
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Box
                    sx={{backgroundColor:"none",boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d"
                    ,mt:2,
                    ml:1.2,
                    mr:1.2,}}
                >
               
                    <PanelOrders />


                </Box>
            </Grid>
            <Stack spacing={2} sx={{mt:1}} alignItems="center">
                <Pagination count={3} color="primary" onChange={changePage} />
            </Stack>
            
       </Grid>   
        )
}

export default SecMainOrders