import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import second from './ChatScreen/2.PNG';
import {Link} from 'react-router-dom';

export default function ChatScreen(){
const classes = useStyles();
return(
    <Box
    data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="2000"
      display="flex" flexDirection="column" style={{background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)',height:'100vh'}}>
        <div className={classes.Heading}>chat application</div>
        <Box>
            <card className={classes.Card}>
            <img style={{width:"70%",height:"90%",borderRadius:12}} src={second} />
            </card>
        </Box>
        <Box style={{display:'flex',justifyContent:'center'}}>
            <Link border={2} style={{color:'#ffae00',borderRadius:12,fontFamily:'cursive',borderBlockEndStyle:'solid',borderColor:'#ffae00',width:150,margin:40}} to="/Project1Screen" className={classes.Link}>
                             Projects
            </Link>
            </Box>
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
      Card:{
          width:"80%",
          height:"60%",
          backgroundColor:'white',
          borderRadius:12
      }
}))