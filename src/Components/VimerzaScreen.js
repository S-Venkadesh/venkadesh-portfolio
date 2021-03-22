import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Box} from '@material-ui/core';
import first from './vimarza/1.jpg';
import second from './vimarza/2.png';
import third from './vimarza/3.jpg';
import fourth from './vimarza/4.png';

export default function VimerzaScreen(){
    const classes = useStyles();
    return(
        <Box display="flex" flexDirection="column" style={{background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)',}}>
            <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"           
            className={classes.Heading}>
            <img style={{width:"60%",height:"60%",borderRadius:12}} src={first} />
            </Box>
            <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"            
            className={classes.Heading}>
            <img style={{width:"60%",height:"60%",borderRadius:12}} src={second} />
            </Box>
            <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"            
            className={classes.Heading}>
            <img style={{width:"60%",height:"60%",borderRadius:12}} src={third} />
            </Box>
            <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"            
            className={classes.Heading}>
            <img style={{width:"60%",height:"60%",borderRadius:12}} src={fourth} />
            </Box>
            <Button className={classes.Button}>Back</Button>
        </Box>
    )
}

const useStyles = makeStyles((theme) => ({
    Heading:{
        color:'#ffae00',
        fontWeight:'bold',
        fontFamily:'cursive',
        fontSize:20,
        paddingTop:30,
        paddingBottom:30
      },
      Button:{
          padding:20,
          borderRadius:"50%",
          backgroundColor:'green'
      }
}))