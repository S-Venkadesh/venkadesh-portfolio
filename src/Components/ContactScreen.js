import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Grid,Link,Modal} from '@material-ui/core/';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
  
export default function ContactScreen(){

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
        <div>
           
        <div className={classes.outerContainer}>
            <div className={classes.Container}>
            <Typography
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
            data-aos="zoom-in"
             style={{color:"#ffae00",fontFamily:'cursive',marginBottom:10}}>Keep in Touch</Typography>
           <Typography className={classes.content}
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos="zoom-in">Venkadesh S</Typography> 
           <i
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos="zoom-in" className={classes.content} class="fab fa-linkedin-in"></i>
            <div 
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos="zoom-in"
            style={{display:"flex",justifyContent:"center",flexDirection:"row"}}>
      
        
            <LinkedInIcon
            onClick={() => openInNewTab('https://www.linkedin.com/in/venkadesh-s-sakthivel/')}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            data-aos="zoom-in"
            
            style={{color:"#ffae00",marginLeft:"6%",marginRight:"6%"}}/>

    
            <div>
            <EmailIcon
            onClick={handleOpen}
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                       data-aos="zoom-in"
                      
            style={{color:"#ffae00",marginLeft:"6%",marginRight:"6%"}}/>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">Mail ID</h2>
                    <p id="simple-modal-description">
                        venkadeshsakthivel03@gmail.com
                    </p>
                </div>
            </Modal>
            </div>

            <GitHubIcon
           onClick={() => openInNewTab('https://github.com/S-Venkadesh')}
                           data-aos-easing="ease-out-cubic"
                           data-aos-duration="2000"
                       data-aos="zoom-in"
            style={{color:"#ffae00",marginLeft:"6%",marginRight:"6%"}}/>

           </div>
           </div>
        </div>
        </div>
    )
}
const useStyles = makeStyles((theme)=>({
    outerContainer:{
        display:'flex',
        background: 'linear-gradient(45deg, #3b3287 30%, #0a192f 90%)',
        height:"100vh",
        alignContent:"center",
        justifyContent:'center',
    },
    Container:{
        display:'flex',
        alignItems:"center",
        justifyContent:'center',
        flexDirection:"column"
    },
    content:{
        color:"white",
        marginBottom:"10%",
        fontSize:"160%",
        fontFamily:"cursive"
    },
    media:{
        color:"white",
    },
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      
      },
}))