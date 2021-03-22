import React from 'react';
import {Button,AppBar,Grid,Toolbar,Typography,Divider,Card,Box} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

export default function RoughScreen(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <AppBar position="static"  className={classes.rootA}>
            <Typography style={{color:"#ffae00",marginTop:'revert',fontFamily:'cursive'}}>Venkadesh S</Typography>
            <Toolbar style={{marginLeft:'auto'}}> 
                <Button className={classes.Button} variant="h1" color="inherit">Home</Button>
                <Button className={classes.Button} color="inherit">About</Button>
                <Button className={classes.Button} color="inherit">Skills</Button>
                <Button className={classes.Button} color="inherit">Contacts</Button>
            </Toolbar>
            </AppBar>
            <Grid container spacing={3} justify={'space-evenly'} alignItems={'center'}>
                <Grid item md={6} style={{marginTop:"7%"}}>
                    <div>
                    <ol style={{marginTop:"15%"}}>
                    <Typography style={{color:"#ffae00",fontFamily:'cursive'}}>Hello , I am</Typography><Divider/>
                    <Typography style={{color:"white",fontFamily:'fantasy',fontSize:50}}>Venkadesh S</Typography>
                    <Typography style={{color:"white",fontFamily:'monospace'}}>Aspiring Full Stack Developer </Typography>
                    </ol>
                    </div>
                </Grid>
                <Grid item md={6}style={{marginTop:"7%"}}>
                <Box
                    boxShadow={2}
                    bgcolor="background.paper"
                    m={1}
                    p={1}
                    style={{ width: '8rem', height: '10rem',alignItems:"center" }}
                >
                </Box>
                </Grid>
            </Grid>
        </div>

    )
}

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)',
      height: '100vh'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    Image:{
        padding:"25%",
        height:"8rem",
        width:"5rem",
        borderWidth:20,
        borderColor:"#ffae00",
        borderRadius:12,
    },
    rootw: {
        width: 100,
      },
    rootA: {
        display:'flex',
        flexDirection:"row",
        justifyContent:'space-around', 
        background: 'linear-gradient(45deg, #3b3287 20%, #0a192f 90%)'
    },
  }));