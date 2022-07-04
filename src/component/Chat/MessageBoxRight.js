import React from 'react';
import {Box  ,Grid} from '@mui/material';
import TypeMessage from './TypeMessage';
import LeftMessage from './LeftMessage';
import RightMessage from './RightMessage';

const MessageBoxRight = () => {
  return (<Grid item xs={12} sm={12} md={12} lg={8}>
                <Box sx={{backgroundColor:"#030f27",color:"#dfb163" , p:2}}>Name User</Box>
                    <Box sx={{
                        backgroundColor:"#ffffff" 
                       ,boxShadow: "0 0px 15px 0px rgb(0 0 0 / 15%)" 
                       ,transformStyle: "preserve-3d" 
                       ,p:0.5
                       ,height:555
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
                        }
                        }}>
                       
                            
                            <LeftMessage />
                            <RightMessage />
                            <LeftMessage />
                            <RightMessage />
                            <LeftMessage />
                            <RightMessage />
                            <LeftMessage />
                            <RightMessage />
                            <LeftMessage />
                            <RightMessage />
                            <LeftMessage />
                            <RightMessage />
                            <LeftMessage />
                            <RightMessage />
                        </Box>
                        <TypeMessage />
                 </Grid> 
  )
}

export default MessageBoxRight