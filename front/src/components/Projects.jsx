import React from 'react'
import { useState, useEffect } from 'react'
import { laravelData, MernData, designData } from '../data'
import projects from './sass/projects.scss'

const Projects = () => {
    const [selected, setSelected] = useState('laravel')
    const [data, setData] = useState([])
   
    useEffect(() => {
      switch(selected){
        case "mern": setData(MernData);
        break;
        case "laravel": setData(laravelData);
        break;
        case "design": setData(designData);
        break;
        default: setData(laravelData);
      }
    }, [selected])
  return (
    <div className='main'>
    <div className='projects'>
      <h2>Projects</h2>
      <h4>Github: https://github.com/tariq-khan9</h4>
      <ul>
        <li className={selected==='laravel' ? 'active' : ''}  onClick={()=>
          {setSelected('laravel')
           console.log(data)}}>React.js-Laravel</li>

        <li className={selected==='mern' ? 'active' : ''} onClick={()=>
          {setSelected('mern')
           console.log(data)}} style={{marginLeft:'40px', marginRight:'40px'}}>MERN Stack</li>

        <li className={selected==='design' ? 'active' : ''} onClick={()=>setSelected('design')}>UI Design</li>
      </ul>
      <div className='work'>
        <div className='images'>
          {data.map((item, i)=>(
        
         <><img key={i} src={item.img} /><h3 key={i}>{item.title}</h3></>
         ))}
         </div>
         <div className='text'>
         {data.map((item, i)=>(
        
        <><p key={i}>{item.para}</p><h5 key={i}>{item.tech}</h5></>
        ))}
         </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
