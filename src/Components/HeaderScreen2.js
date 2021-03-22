import React from 'react';
import './Header.css';
import '../App.css';
import {Link} from 'react-router-dom';
import {Card,Paper,Grid,Button,Box,Typography} from '@material-ui/core';
import TocIcon from '@material-ui/icons/Toc';

export default function HeaderScreen2(){
    function myFunction(){
            let x=document.getElementById('menubar');
            if(x.style.display==='none')
            {
                x.style.display='block'
            }
            else{
                x.style.display='none'
            }
    }
    return(
        <div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:"100%",alignItems:'center'}} className="Navbar">
            <div className="leftNavbar">
            <Typography style={{color:'#ffae00',fontFamily:'cursive'}}>
               Venkadesh S
            </Typography>
            </div>
            <div className="rightNavbar">
            <Link style={{textDecoration: 'none'}}
                to="/">
               <a style={{color:'white',paddingLeft:20,textDecoration:'none'}}>Home</a> 
            </Link>
            <Link style={{textDecoration: 'none'}}
                to="/AboutScreen">
                <a style={{color:'white',paddingLeft:20}} color="inherit">About</a>
            </Link>
            <Link style={{textDecoration: 'none'}} to="/SkillScreen">
                <a style={{color:'white',paddingLeft:20}} color="inherit">Skill</a>
            </Link> 
            <Link style={{textDecoration: 'none'}} to="/Project1Screen">
                <a style={{color:'white',paddingLeft:20}} color="inherit">Project</a>
            </Link> 
            <Link style={{textDecoration: 'none'}} to="/ContactScreen">
                <a style={{color:'white',paddingLeft:20}} color="inherit">Contact</a>
            </Link> 
            </div>
            <div className="buttonbar">
                <TocIcon style={{color:'white'}} id="btn" onClick={myFunction}/>
            </div>
        </div>
        <div className="menu">
        <Box border={2} borderColor='#ffae00' borderRadius={12} id="menubar" style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',display:'none'}}>
            <Link style={{textDecoration:'none'}} style={{textDecoration:'none',paddingTop:10}}
                to="/">
               <a style={{color:'#ffae00'}}>Home</a> 
            </Link><br/>
            <Link style={{textDecoration:'none'}} 
                to="/AboutScreen">
                <a style={{color:'#ffae00'}} color="inherit">About</a>
            </Link><br/>
            <Link style={{textDecoration:'none'}} to="/SkillScreen">
                <a style={{color:'#ffae00'}} color="inherit">Skill</a>
            </Link> <br/>
            <Link style={{textDecoration:'none'}} to="/Project1Screen">
                <a style={{color:'#ffae00'}} color="inherit">Project</a>
            </Link> <br/>
            <Link style={{textDecoration:'none'}} to="/ContactScreen">
                <a style={{color:'#ffae00'}} color="inherit">Contact</a>
            </Link>
        </Box>
        </div>
        </div>
    )
}