import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,Paper,Grid,Button,Box, Typography} from '@material-ui/core';

export default function SkillScreen1(){
return(
    <Box style={{height:'180vh'}}>
    <Box style={{display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
        <Box style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Typography style={{color:'#ffae00',fontFamily:'cursive'}}>
                Skill sets
            </Typography>
        </Box>
    </Box>
    <Typography style={{color:'#ffae00',fontFamily:'cursive',marginTop:'3%'}}>
                Front End
            </Typography>
    <Box style={{flex:1,display:'flex',justifyContent:'center',marginTop:'3%'}}>

            <Grid container spacing={2}>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={3} xs={12}>
                    <Box 
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"                   
                    style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                    <img style={{height:100}} src={'https://www.startertutorials.com/corejava/wp-content/uploads/2014/09/java-1.png'}/>
                    </Box>
                </Grid>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={3} xs={12}>
                    <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                    style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                    <img style={{height:80,borderRadius:'50%'}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&usqp=CAU'}/>
                    </Box>
                </Grid>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={3} xs={12}>
                    <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                    style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                    <img style={{height:80,borderRadius:'50%'}} src={'https://practity.com/en/wp-content/uploads/sites/2/2018/03/html-css-tutorials2.jpg'}/>
                    </Box>
                </Grid>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={3} xs={12}>
                <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"               
                style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                    <img style={{height:80,borderRadius:'50%',width:100}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQxgNCy83WizuptwAnVw_zfRL_Hhujd8GaQ&usqp=CAU'}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box style={{flex:1}}>
        <Typography style={{color:'#ffae00',fontFamily:'cursive',marginTop:'3%'}}>
                Back End
            </Typography>
            <Grid style={{marginTop:'3%'}} container spacing={1}>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={4} xs={12}>
                    <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                    style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                        <img style={{height:100,borderRadius:'50%',width:100}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO5g2c4jc004DkuwHCRwA3RvXOy7WHVX0P8Q&usqp=CAU'}></img>
                    </Box>
                </Grid>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={4} xs={12}>
                    <Box
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"                    
                     style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                        <img style={{height:100,borderRadius:'50%',width:100}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY02eXWIsHgsDKxF7-PFivzVrkPdJOMMDOOA&usqp=CAU'}/>
                    </Box>
                </Grid>
                <Grid style={{display:'flex',justifyContent:'center'}} item md={4} xs={12}>
                    <Box
                     data-aos="zoom-in"
                     data-aos-delay="50"
                     data-aos-duration="2000"                   
                    style={{width:150,height:120,display:'flex',alignItems:'center',justifyContent:'center'}} border={4} borderColor='#ffae00' borderRadius="50%">
                        <img style={{height:100,borderRadius:'50%',width:100}} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXD7OSx9unsBKTaHsgCidhm9qgM5Q6UyB9tA&usqp=CAU'}/>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </Box>
)
}