import React , {Fragment, useContext} from 'react';
import {Typography, Grid , Box , Stack}  from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import DataContext from '../../context/DataContext';
import Header from '../../layout/Header';
import MenuMobile from '../menu/MenuMobile';
import Menu from '../menu/Menu';
import Footer from '../../layout/Footer';

const DrafDashboard = ({txtpage ,children}) => {

  const {theme , scaleTablet , matches} = useContext(DataContext);

  return (<ThemeProvider theme={theme}>
            <Fragment>
                 <Header />
                 <Grid container sx={{backgroundColor:"#f5f5f5"}}>
                        <Grid item xs={12} md={1} sx={{mt:scaleTablet && !matches ? 0 : 10}}>
                        {
                        scaleTablet && !matches   ? <Menu /> : <MenuMobile />
                        }
                        </Grid>
                        <Grid item xs={12} md={11} sx={{mt:matches ? 5 : 10 , backgroundColor:"#f5f5f5" , mt: { xs: 5, sm: 10 }}}>
                            <Stack spacing={2} sx={{ml:matches ? 0 : 10 , mr:matches ? 0 : 5}}>
                              <Typography variant='h6'>{txtpage}</Typography>
                              <hr/>
                              <Grid container spacing={1} sx={{ml:matches ? 0 : 10}}>
                                    {children}
                                <Footer />
                              </Grid>
                              
                           </Stack>

                        </Grid>

                 </Grid>
            </Fragment>
          </ThemeProvider>
  )
}

export default DrafDashboard