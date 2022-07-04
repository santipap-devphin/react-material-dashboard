import React , {useState} from 'react';
import DrafDashboard from '../../component/DashBoard/DrafDashboard';
import { Typography, Grid , Box , Stack , TextField , Button , InputLabel , MenuItem , FormControl , Select}  from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import TableListOrder from '../../component/Table/TableListOrder';

const bgOrder = () => {
    const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [value, setValue] = useState(0);

  const handleChangeVal = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  
  return (<DrafDashboard txtpage={"รายการสั้งซื้อ"}>
            
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
                            <MenuItem value={20}>ลูกค้าใหม่</MenuItem>
                            <MenuItem value={30}>กำลังดำเนินการ</MenuItem>
                            <MenuItem value={40}>จ่ายเงินแล้ว</MenuItem>
                            <MenuItem value={50}>ส่งสินค้า</MenuItem>
                            <MenuItem value={60}>ได้รับสินค้า</MenuItem>
                            <MenuItem value={70}>ยกเลิก</MenuItem>
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
                            <Tab label="ทั้งหมด" sx={{fontSize:18}} />
                            <Tab label="ลูกค้าใหม่" sx={{fontSize:18}} />
                            <Tab label="กำลังดำเนินการ" sx={{fontSize:18}} />
                            <Tab label="จ่ายเงินแล้ว" sx={{fontSize:18}} />
                            <Tab label="ส่งสินค้า" sx={{fontSize:18}} />
                            <Tab label="ได้รับสินค้า" sx={{fontSize:18}} />
                            <Tab label="ยกเลิก" sx={{fontSize:18}} />
                    </Tabs>
                    </Box>    
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Box
                            sx={{backgroundColor:"#ffffff",boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d" ,mt:1,  mr:1.2}}
                        >
                         <TableListOrder />
                        </Box>
                    </Grid>
          </DrafDashboard>
         )
}

export default bgOrder