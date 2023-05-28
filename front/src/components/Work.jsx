import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import img from './../images/merngig.JPG'
import './sass/work.scss'
import { Grid } from '@mui/material';


const workItems = [
    {
      image: img,
      title: 'Slide 1',
      description: 'Description 1',
    },
    {
        image: img,
      title: 'Slide 2',
      description: 'Description 2',
    },
    {
        image: img,
      title: 'Slide 3',
      description: 'Description 3',
    },
  ];

 

  const Work = () => {
    
  
    const renderItem = (item, index) => (
      <Paper key={index} className='paper'>
        <div className='heading'>My Projects</div>
        <Grid container>
            <Grid item lg={8} sm={12}>
              <img src={item.image} alt={item.title} />
            </Grid>
            <Grid item lg={4} sm={12}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Grid>
        </Grid>       
      </Paper>
    );
  
    return (
      <Carousel
       
      >
        {workItems.map((item, index) => renderItem(item, index))}
      </Carousel>
    );
  };
  
  export default Work;
  
  