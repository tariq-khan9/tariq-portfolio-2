import React from 'react'
import slider from './sass/slider.scss'
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Button } from '@mui/material'


export default function Slider2() {
  const items = [
      
      {
        name: "Website Design",
        description: "Probably the most random thing you have ever seen!",
        image: '/images/bootstrap.png',
        image2: '/images/mui.png'
        },
        {
          name: "React JS developer",
          description: "Probably the most random thing you have ever seen!",
          image: '/images/react.png'
          
        },
        {
          name: "Laravel developer",
          description: "Probably the most random thing you have ever seen!",
          image: '/images/laravel.png'
        }
    ]

  return (
    <div className='slider' id='slider'>
      <Grid container className='slides'>
         {items.map((item, i)=>(<>
            <Grid item lg={6} className='left'>
            
            <h2 key={i}>{item.name}</h2>
            <p key={i}>{item.description}</p>
            
            </Grid>
            <Grid item lg={6} className='right'>
            
            <img src={item.image}/>
            <div>
            <img src=''/>
            </div>
          </Grid> 
          </>
          ))}
      </Grid>
    </div>
  )
}

 
