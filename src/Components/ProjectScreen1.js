import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Paper,Grid,Box,Button,CardActionArea,CardMedia,CardContent,Typography,CardActions} from '@material-ui/core';
import {Link} from 'react-router-dom';
import img1 from './projectintro/Chat.png';
import img2 from './projectintro/1.jpg';
import img3 from './projectintro/game.png';
import img4 from './projectintro/Kncet.jpg';
import img5 from './projectintro/chick.png';
import img6 from './projectintro/line.png';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function ProjectScreen1(){
    const classes = useStyles();
    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    return(
        <Box style={{height:'100%'}}>
        <Box style={{display:'flex',flex:1,flexDirection:'column',}}>
            <Box style={{marginBottom:50}}>
            <Typography style={{color:'#ffae00',fontFamily:'cursive',marginTop:20}}>
               Projects
            </Typography>
            </Box>
        <Box style={{display:"flex",justifyContent:'center',flexDirection:'column',marginBottom:80}}>

            <Box>
                <Grid 
                id="hai1" container spacing={1}>
                    <Grid id="hai2" className={classes.center} item md={4} xs={12}>
                    <Card 
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    id="hai3" className={classes.root}>
                        <CardActionArea>
                        <img style={{width:300,height:150}} src={img1}/>

                        </CardActionArea>
                        <CardActions>
                        <Link style={{textDecoration: 'none'}}  to="/ChatScreen" className={classes.Link}>
                             Know More
                        </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.center}>
                    <Card
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                     id="hai3" className={classes.root}>
                        <CardActionArea>
                        <img style={{width:300,height:150}} src={img3}/>

                        </CardActionArea>
                        <CardActions>

                        <Link style={{textDecoration: 'none'}}  to="/GameScreen" className={classes.Link}>
                             Know More
                        </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.center}>
                    <Card 
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"                   
                    id="hai3" className={classes.root}>
                        <CardActionArea>
                        <img style={{width:300,height:150}} src={img2}/>

                        </CardActionArea>
                        <CardActions>
                        <Link style={{textDecoration: 'none'}}  to="/VimerzaScreen" className={classes.Link}>
                             Know More
                        </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.center}>
                    <Card
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                    id="hai3" className={classes.root}>
                        <CardActionArea>
                        <img style={{width:300,height:150}} src={img4}/>

                        </CardActionArea>
                        <CardActions>

                        <Link style={{textDecoration: 'none'}} to="/KNCETians" className={classes.Link}>
                            Know More
                        </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.center}>
                    <Card
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                    id="hai3" className={classes.root}>
                        <CardActionArea>
                        <img style={{width:300,height:150}} src={img5}/>

                        </CardActionArea>
                        <CardActions>

                        <Link style={{textDecoration: 'none'}} to="/CountryhenScreen" className={classes.Link}>
               Know More
               </Link>
                        </CardActions>
                    </Card>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.center}>
                    <Card
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                    id="hai3" className={classes.root}>
                        <CardActionArea>
                        <img style={{width:300,height:150}} src={img6}/>

                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary" onClick={() => openInNewTab('https://www.cs.york.ac.uk/micromouse/Papers/Building-a-line-following-robot.pdf')}>
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
        </Box>
        </Box>
    )
}

const useStyles = makeStyles({
    root: {
      maxWidth: 300,
    },

    center:{
        display:'flex',
        justifyContent:'center',
        height:'fit-content',
       
    }
  });