import React , {useState} from 'react';
import { Typography, Grid , Box , Stack , TextField 
    , Button , InputLabel , MenuItem 
    , FormControl , Select 
    , Accordion , AccordionDetails , AccordionSummary
    , Tab , Chip , Pagination
   }  from '@mui/material';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DrafModal from '../../component/Modal/DrafModal';
import ReplayIcon from '@mui/icons-material/Replay';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import slipblank from '../../assets/slipblank.jpg'

const SecMainShipping = () => {

    const [value, setValue] = useState(0);

    const [openAppove , setOpenAppove] = useState(false);

    const [openEdit , setOpenEdit] = useState(false);

    const [openReCheck , setOpenReCheck] = useState(false);

    const handleChangeVal = (event, newValue) => {
      console.log(newValue);
      setValue(newValue);
    };
    const [expanded, setExpanded] = useState(false);

    const handleChangePanel = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
    };

    const [statusErr, setStatusErr] = useState('error');
    const [statusRecheck , setStatusRecheck] = useState('resend');
    const handleChange = (event) => {
        setStatusErr(event.target.value);
    };

    const confirmAppove = () => {
        alert("Appove");
        setOpenAppove(false)
        setStatusErr('');
    }
    const confirmEdit = () => {

        alert("editShipping");
        setOpenEdit(false);

    }
    const confirmReCheck = () => {


    }
    const clkShowModal = () => {
        setOpenAppove(true)
    }
    const clkModalEdit = () => {

        setOpenEdit(true);
    }
    const modalRecheck = () => {

        setOpenReCheck(true);
    }
    const changePage = () => {

    }

    const handleRecheck = (e) => {
        setStatusRecheck(e.target.value);
    }
  return (<>
            <Grid container columnSpacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Typography variant='h5'>?????????????????????????????????????????????</Typography>   
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <TextField id="filled-basic" label="???????????????" variant="filled" size="small" fullWidth />
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
                         
                            <Tab label="?????????????????????" icon={<Chip color="default" label="20" />} iconPosition="end" sx={{fontSize:18}} />
                            <Tab label="?????????????????????????????????" icon={<Chip color="primary" label="5" />} iconPosition="end" sx={{fontSize:18}} />
                            <Tab label="?????????????????????????????????????????????" icon={<Chip color="success" label="15" />} iconPosition="end" sx={{fontSize:18}}  />
                            <Tab label="????????????????????????????????????" icon={<Chip color="error" label="5" />} iconPosition="end" sx={{fontSize:18}} />
                            
                    </Tabs>
                    
                    </Box>    
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box
                        sx={{
                            flexGrow: 1,
                            mt:2,
                            ml:1.2,
                            mr:1.2,
                            bgcolor: 'none',
                            boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" , transformStyle: "preserve-3d",
                            maxWidth: { xs: 400 , sm: 800 , md: "100%"}
                        }}
                        >
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChangePanel('panel1')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    01 ????????? 65
                                </Typography>
                             
                                <Chip label="OrderNo 1145525" />
                                <Chip label="?????????????????????????????????????????????" color="success" sx={{ml:1}} />
                                </AccordionSummary>
                                <AccordionDetails>
                                 <Stack>
                                      <Typography variant='h6'> ???????????????????????? EH xxxxxxxxxxxx</Typography>
                                 </Stack>
                                 <Button variant='contained' color="info" sx={{mt:1}} onClick={clkModalEdit}> <ReplayIcon /> ???????????????</Button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChangePanel('panel2')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}> 02 ????????? 65</Typography>
                                <Chip label="OrderNo 2255663"/>
                                <Chip label="?????????????????????????????????" color="primary" sx={{ml:1}} />
                               
                                </AccordionSummary>
                                <AccordionDetails>
                                 <Stack>
                                     <Typography variant='h6'>???????????????????????????????????????????????????</Typography>
                                 </Stack>
                                 <Button variant='contained'  sx={{mt:1}} onClick={clkShowModal}> <CheckCircleIcon /> ?????????????????????</Button>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel3'} onChange={handleChangePanel('panel3')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel3bh-content"
                                id="panel3bh-header"
                                >
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                03 ????????? 65
                                </Typography>
                                <Chip label="OrderNo 63366522"/>
                                <Chip label="????????????????????????????????????" color="error" sx={{ml:1}} />
                              
                                </AccordionSummary>
                                <AccordionDetails>
                                <Stack>
                                    <Typography variant='h6'>?????????????????????????????????</Typography>
                                </Stack>
                                 <Button variant='contained' color="secondary" sx={{mt:1}} onClick={modalRecheck}> <RestartAltIcon /> ?????????????????????????????????????????????</Button>
                                </AccordionDetails>
                            </Accordion>
                            
                                
                        </Box>
                        </Grid>
            </Grid>
            <DrafModal open={openAppove} setOpen={setOpenAppove} txthead ={"???????????????????????????????????????"} handleConfirm={confirmAppove}>
                        
                     <TextField 
                        id="filled-basic" 
                        label="????????????????????????????????????" 
                        variant="filled"
                        fullWidth
                        sx={{pb:1}}
                    />
                    
             </DrafModal>
            <DrafModal open={openEdit} setOpen={setOpenEdit} txthead ={"?????????????????????????????????"} handleConfirm={confirmEdit}>
                    <FormControl variant="filled" fullWidth sx={{pb:1}}>
                        <InputLabel id="demo-simple-select-filled-label">???????????????</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={statusErr}
                        onChange={handleChange}
                        
                        >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                            <MenuItem value={'error'}>????????????????????????????????????</MenuItem>
                       </Select>
                    </FormControl>
                    <TextField 
                        id="filled-basic" 
                        label="????????????????????????????????????????????????" 
                        variant="filled"
                        rows={3}
                        multiline
                        fullWidth
                        sx={{pb:1}}
                    />
            </DrafModal>
            <DrafModal open={openReCheck} setOpen={setOpenReCheck} txthead ={"???????????????????????????????????????????????????????????????"} handleConfirm={confirmReCheck}>
                    <FormControl variant="filled" fullWidth sx={{pb:1}}>
                        <InputLabel id="demo-simple-select-filled-label">???????????????</InputLabel>
                        <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={statusRecheck}
                        onChange={handleRecheck}
                        
                        >
                        
                            <MenuItem value={'resend'}>??????????????????????????????????????????</MenuItem>
                            <MenuItem value={'error'}>?????????????????????????????????????????????????????????</MenuItem>
                       </Select>
                    </FormControl>
                    {console.log(statusRecheck)}
                    {
                        statusRecheck === "resend" ? 
                        <TextField 
                            id="filled-basic" 
                            label="????????????????????????????????????" 
                            variant="filled"
                            fullWidth
                            sx={{pb:1}}
                        />
                        :
                        <TextField 
                            id="filled-basic" 
                            label="???????????????????????????????????????????????????????????????" 
                            variant="filled"
                            rows={3}
                            multiline
                            fullWidth
                            sx={{pb:1}}
                    />
                    }
                    
            </DrafModal>
            <Stack spacing={2} sx={{mt:1}} alignItems="center">
                <Pagination count={3} color="primary" onChange={changePage} />
            </Stack>
          </>
   )
}

export default SecMainShipping