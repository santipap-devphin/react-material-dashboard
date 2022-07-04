import React from 'react';
import {Box  ,Grid} from '@mui/material';
import UserBox from './UserBox';


const MessageBoxLeft = () => {
  return (<Grid item xs={12} sm={12} md={12} lg={4} textAlign="center">
                    <Box sx={{backgroundColor:"#030f27",color:"#dfb163" , p:2}}>Message</Box>
                    <Box sx={{
                        backgroundColor:"#ffffff" 
                        ,boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" 
                        ,transformStyle: "preserve-3d" 
                        ,p:2
                        ,height:625
                        ,overflow:"auto"
                        ,'&::-webkit-scrollbar': {
                            width: '0.3em'
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.1)',
                            outline: '0px solid slategrey'
                        }}}>
                         <UserBox />
                         <UserBox />
                         <UserBox />
                         <UserBox />
                         <UserBox />
                         <UserBox />
                         <UserBox />
                         <UserBox />
                        
                     </Box>
                </Grid>  
        )
}

export default MessageBoxLeft