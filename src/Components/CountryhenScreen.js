import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Paper,Grid,Button,Box} from '@material-ui/core';
import first from './countryhen/Capture.PNG';
import second from './countryhen/2.PNG';
import third from './countryhen/3.PNG';
import fourth from './countryhen/4.PNG';
import Five from './countryhen/5.PNG';
import six from './countryhen/6.PNG';
import {Link} from 'react-router-dom';

export default function CountryhenScreen(){
    const classes = useStyles();
    return(
        <Box className={classes.outerLayer} display="flex" flexDirection="column">
            <Box className={classes.upperLayer} flex={1}>
                
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <Box
                            data-aos="zoom-in"
                            data-aos-delay="50"
                            data-aos-duration="2000"                
                        display="flex" justifyContent="center" alignItems="center" className={classes.card}>
                            <img style={{width:221,height:310,borderRadius:12}} src={first} />
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Box
                             data-aos="zoom-in"
                             data-aos-delay="50"
                             data-aos-duration="2000"               
                        display="flex" justifyContent="center" alignItems="center" className={classes.card}>
                        <img style={{width:221,height:310,borderRadius:12}} src={second} />
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
            
            </Box>
            <Box className={classes.LowerLayer} flex={1}>
            <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Box
                             data-aos="zoom-in"
                             data-aos-delay="50"
                             data-aos-duration="2000"               
                        display="flex" justifyContent="center" alignItems="center" className={classes.card}>
                        <img style={{width:221,height:310,borderRadius:12}} src={fourth} />
                        </Box>
                        </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <Box
                              data-aos="zoom-in"
                              data-aos-delay="50"
                              data-aos-duration="2000"              
                        display="flex" justifyContent="center" alignItems="center" className={classes.card}>
                        <img style={{width:221,height:310,borderRadius:12}} src={third} />
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.upperLayer} flex={1}>
                
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box display="flex" justifyContent="center" alignItems="center">
                        <Box
                              data-aos="zoom-in"
                              data-aos-delay="50"
                              data-aos-duration="2000"              
                        display="flex" justifyContent="center" alignItems="center" className={classes.card}>
                            <img style={{width:221,height:310,borderRadius:12}} src={Five} />
                        </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Box
                              data-aos="zoom-in"
                              data-aos-delay="50"
                              data-aos-duration="2000"              
                        display="flex" justifyContent="center" alignItems="center" className={classes.card}>
                        <img style={{width:221,height:310,borderRadius:12}} src={six} />
                        </Box>
                    </Box>
                    </Grid>
                </Grid>
                <Box style={{display:'flex',justifyContent:'center'}}>
            <Link border={2} style={{color:'#ffae00',borderRadius:12,fontFamily:'cursive',borderBlockEndStyle:'solid',borderColor:'#ffae00',width:150,margin:40}}  to="/Project1Screen" className={classes.Link}>
                             Projects
            </Link>
            </Box>
            </Box>

        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    outerLayer:{
        height:"100%",
        background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)'
    },
    card:{
        margin:"2%",
        height:"50vh",
     
        width:'35%',
        borderRadius:12
    },
    Link:{
    
    }
}))