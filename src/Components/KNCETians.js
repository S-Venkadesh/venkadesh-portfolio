import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Paper,Grid,Button,Box} from '@material-ui/core';
import {Link} from 'react-router-dom';
import first from './Kncetians/1.jpg';
import second from './Kncetians/2.jpg';
import third from './Kncetians/3.jpg';
import fourth from './Kncetians/4.jpg';

export default function KNCETians(){
    const classes = useStyles();
    return(
        <div style={{height:'100vh'}}>
        <div style={{background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)',display:'flex',flexDirection:'column'}}>
        <Box display="flex" flexDirection="row" flex={1}>
            <Box flex={1}>
            <div className={classes.Heading}>chat application</div>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"                   
                    classes={classes.Box}>
                    <img style={{width:221,height:310,borderRadius:12}} src={first} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"                   
                    classes={classes.Box}>
                    <img style={{width:221,height:310,borderRadius:12}} src={second} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box
                      data-aos="zoom-in"
                      data-aos-delay="50"
                      data-aos-duration="2000"                  
                    classes={classes.Box}>
                    <img style={{width:221,height:310,borderRadius:12}} src={third} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"                   
                    classes={classes.Box}>
                    <img style={{width:221,height:310,borderRadius:12}} src={fourth} />
                    </Box>
                </Grid>
            </Grid>
            </Box>

        </Box>
        <Box style={{display:'flex',justifyContent:'center'}}>
            <Link border={2} style={{color:'#ffae00',borderRadius:12,fontFamily:'cursive',borderBlockEndStyle:'solid',borderColor:'#ffae00',width:150,margin:40}}  to="/Project1Screen" className={classes.Link}>
                             Projects
            </Link>
            </Box>
        </div>

        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    OuterContainer:{
        background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)',
        height:"100%",
    },
    Box:{
        height:"30%",
        width:"20%",
        backgroundColor:'white'
    },
    Heading:{
        color:'#ffae00',
        fontWeight:'bold',
        fontFamily:'cursive',
        fontSize:20,
        paddingTop:30,
        paddingBottom:30
      },
}))