import React from 'react';
import {Box  ,Grid } from '@mui/material';

const RightMessage = () => {
  return (
                <Grid container sx={{mt:2}} justifyContent="right" alignItems="right">
                    <Grid item xs={6}>
                        <Box className="msgRight">Text right</Box>    
                    </Grid>
                 </Grid>
  )
}

export default RightMessage