import React from 'react'
import testimonials from './sass/testimonials.scss'

export default function Testimonials() {
  const MernData = [
    {
      id: 1,
      title: " 111 Web Social Media App",
      img:'/images/mern2.JPG',
      para:'Daily-Soldout is a lightweight single-page application that incorporates various advanced features such as charting and CRUD operations. The application is developed using the MERN stack and allows for record storage with corresponding dates, along with the ability to generate monthly charts.',
      tech:'Technologies  used:   React.js | Express.js | Mongo DB | Material UI | Recharts'
    },
    {
      id: 2,
      title: " 222 Web Rampa UI Design",
      img:'/images/mern1.JPG',
    },
    {
      id: 3,
      title: " 333 Web E-commerce Design",
      img:'/images/mern3.jpg',
    }
  ];
  
  return (
    <div className='testimonials' id='testimonials'>
       
      <div className="main">
      {MernData.map((item) => (
        <div className="slider">
        
          <div className="text">
            <p>{item.title}</p>
          </div>

          <div className="image">
            dfdfdf dfsdfsd dfsdfsdfsdf dfsdfsd
          </div>
           
        </div>
        ))}
      </div>
      
    </div>
  )
}
