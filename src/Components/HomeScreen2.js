import React from 'react';
import {Button,AppBar,Grid,Toolbar,Typography,Divider,Modal,Box} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Mass from './Home1.jpg';
import './HomeScreen.css';
import { createMuiTheme, responsiveFontSizes,ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
export default function HomeScreen2(){
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    return(
      <Box style={{height:"100vh",display:'flex',alignItems:'center'}}>
        <Grid container spacing={3} display='flex' justifyContent='space-evenly' alignItems="center">
          <Grid item xs={12} md={6}>
          <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"          
          style={{display:'flex',justifyContent:"center",flexDirection:'column',marginLeft:40,marginRight:40}}>
      
                    <Box border={2} style={{borderColor:'#ffae00',borderRadius:12}}>
                        <Typography data-aos-duration="2000" data-aos-delay="50" data-aos="flip-left" style={{color:"#ffae00",fontFamily:'cursive'}}>Hello , I am</Typography><Divider/>
                        <Typography data-aos-duration="2000" data-aos-delay="50" data-aos="flip-left" style={{color:"white",fontFamily:'fantasy',fontSize:50}}>Venkadesh S</Typography>
                        <Typography data-aos-duration="2000" data-aos-delay="50" data-aos="flip-left" style={{color:"white",fontFamily:'monospace'}}>Aspiring Full Stack Developer </Typography>
                    </Box>
          <Box style={{display:'flex',justifyContent:'space-evenly'}}>
          <div>
            <button 
            onClick={handleOpen}
            className={classes.button}>Mail Me :)</button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
                  <div className={classes.paper}>
      <h2 id="simple-modal-title">My Mail ID</h2>
      <p id="simple-modal-description">
        venkadeshsakthivel03@gmail.com
      </p>
      
    </div>
            </Modal>
          </div>

          <button 
          onClick={() => openInNewTab('https://www.canva.com/design/DAEG8TJFgvY/KPDVyE1GjIIV4k7QngQmzw/edit?category=tACZCki4tbY&utm_source=onboarding#2')}
          className={classes.button}>My CV :)</button>
          </Box>
          </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
          
          data-aos="zoom-in"
          data-aos-delay="50"
          data-aos-duration="2000"          
          >
          <img className={classes.Image} src={Mass} />
          </Box>
          </Grid>
        </Grid>
      </Box> 
    )
}

const useStyles = makeStyles((theme) => ({
    button:{color:'white',
    backgroundColor:'hsl(225deg 54% 16%)',
    borderColor:'#ffae00',
    padding:10,
    borderWidth:2,
    fontFamily:'cursive',
    borderRadius:12,
    margin:10
},
paper: {
  position: 'absolute',
  width: 300,
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(2, 4, 3),
},
Image:{
  width:221,
  height:251,
  borderRadius:12,
  "&:hover": {
    marginBottom:30
  }
}
}))