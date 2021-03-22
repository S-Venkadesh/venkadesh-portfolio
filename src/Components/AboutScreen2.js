import React from 'react';
import {Button,AppBar,Toolbar,Typography,Divider,Grid,Box} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Mass1 from './Six.jpg'

export default function AboutScreen1(){
    const classes = useStyles();
    return(
        <Box style={{height:'130vh'}}>
        <Box style={{display:'flex',justifyContent:'space-evenly',flexDirection:'column'}}>
            <Typography style={{flex:1,color:'#ffae00',fontFamily:'cursive',marginTop:20}}>
               About me
            </Typography>
            <Box style={{flex:3,display:'flex',flexDirection:'row',justifyContent:'space-evenly',marginTop:125}}>
               <Grid container spacing={3} style={{marginBottom:40,flex:1}}>
               <Grid item md={6} xs={12}>
               <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"              
               >
               <img className={classes.Image} src={Mass1}/>
                </Box>
                </Grid>
                <Grid item md={6} xs={12} style={{flex:2}}>
               <Box>
               <Box
                    style={{}}
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"              
               border={2} style={{borderColor:'#ffae00',borderRadius:12,padding:5,marginLeft:40,marginTop:50,marginRight:40}}>
                    <Typography style={{flex:0.5,color:'#ffae00',fontFamily:'cursive'}}>
                        web developer
                    </Typography>
                    <Typography 
                    className={classes.About}
                    >
                    I am Venkadesh S and I am currently pursuing my bachelors degreee in Kongunadu college of engineering and technology in Electronics and Communication Engineering(ECE) stream.
                    I am a very curious person to learn new things and always focusing on solving the problem with a persistent approach.
                    </Typography>
                    
                    </Box>
                </Box>
                </Grid>

                </Grid>
            </Box>
        </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    About:{
        color:'white',
        fontSize:"120%",
        fontFamily:'cursive'
    },
    Image:{
        width:218,
        height:261,
        borderRadius:12,
        "&:hover": {
          borderRadius:12,
          marginTop:20
        }
      }
})