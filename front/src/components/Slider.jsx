import React from 'react'
import slider from './sass/slider.scss'
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Button } from '@mui/material'




export default function Slider(props) {
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
      <Carousel  interval={4000} indicators={false} autoPlay >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    </div>
  )
          }

  function Item(props)
{
    return (
        <Paper sx={{background: 'transparent'}}>
          <Grid container className='slides'>
            <Grid item lg={6} className='left'>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            </Grid>
          <Grid item lg={6} className='right'>
            
            <img src={props.item.image}/>
            <div>
            <img src={props.item.image2}/>
            </div>
            
            
       
          
            
          </Grid> 
            </Grid>
        </Paper>
    )
}
