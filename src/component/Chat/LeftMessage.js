import React from 'react'
import {Box  ,Grid , Stack} from '@mui/material';
import subimg from "../../assets/prdimg.jpg"
const LeftMessage = () => {
  return (<Grid container sx={{mt:5}} justifyContent="left" alignItems="left">
                <Grid item xs={6}>
                    <Stack spacing={1}>
                        <Stack direction="row" spacing={1} sx={{pl:2}}>
                                <img src={subimg} style={{width:40 , borderRadius:20}} />
                                <Box className="msgLeft">
                                        Text Left
                                </Box>
                        </Stack>
                        
                    </Stack>
                    <span style={{fontSize:14}}>11:01 AM | June 9</span>
                </Grid>
            </Grid>
  )
}

export default LeftMessage