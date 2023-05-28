import React from 'react'
import {Grid} from '@mui/material'
import intro from './sass/intro.scss'
import {Canvas} from '@react-three/fiber'
import {MeshDistortMaterial, OrbitControls, Sphere} from '@react-three/drei'

export default function Intro() {
  return (
    <Grid container className='intro' id='intro'>
      <Grid item lg={6} sm={6} xs={12} className='left'>
        <div>
        <h4>Hi there, I'm</h4>
        <h1>Muhammad Tariq</h1>
        <h5>Freelance Web Developer</h5>
        </div>
      </Grid>
      <Grid item lg={6} sm={6} xs={12} className="right">
          <Canvas >
            <OrbitControls enableZoom={false} autoRotate/>
            <ambientLight intensity={1} />
            <directionalLight intensity={1.5} position={[5,2,1]}/>
            <Sphere args={[1,100, 200]} scale={2.5}>
            <MeshDistortMaterial color="#050923" attach="material" distort={0.5} speed={2}/>
            </Sphere>
          </Canvas>
          <img src='/images/4.jpg' />
      </Grid>
    </Grid>
  )
}

