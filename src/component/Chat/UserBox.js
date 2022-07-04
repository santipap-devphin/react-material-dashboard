import React , {Fragment} from 'react';
import {Grid, Typography , Divider} from '@mui/material';
import img from "../../assets/user-profile.png";

const UserBox = () => {
  return (<Fragment>
            <Grid className='chat-pointer' container rowSpacing={2} 
            sx={{
                mt:1
                ,mb:1
                ,'&:hover': {
                    backgroundColor: '#FBF1d5',
                    opacity: [0.9, 0.8, 0.7],
                        },
                }} >
                <Grid item xs={12} sm={12} md={12} lg={2} textAlign="center">
                    <img src={img} style={{width:50}} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8} textAlign="left">
                    <Typography>ทดสอบ ทดสอบ <br />Lorem Ipsum is simply dummy text</Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={2} textAlign="center">
                    <Typography> 1 มิย.</Typography>
                </Grid>
            </Grid>
            <Divider />
        </Fragment>
  )
}

export default UserBox