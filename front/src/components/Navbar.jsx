import React from 'react';
import {Grid} from '@mui/material'
import { useState } from 'react';
import navbar from './sass/navbar.scss';

export default function Navbar({menuOpen, setMenuOpen}) {
 

  return (
    <div className={'navbar '+ (menuOpen && 'menu-active')}>
      <div  className="wrapper">
        

        <div className="right">
          <div>
            <div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>

        <div className="middle">
           <a href="#intro" className='logo'> <div>tariq.</div></a>
        </div>

        <div className="left">
          <Grid container >
            <Grid item lg={6} sm={6}>
            <span>+92-314-9698996</span>
            </Grid>
            <Grid item lg={6} sm={6}>
            <span>tariqkhan.cs9@gmail.com</span>
            </Grid>
          </Grid>
        
       
        </div>

        
     
      </div>
      
    </div>
  )
}
