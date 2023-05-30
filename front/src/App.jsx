import Navbar from './components/Navbar';
import { useState } from 'react';
import Intro from './components/Intro';
import Slider2 from './components/Slider2';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import app from './components/sass/app.scss';
import Sidebar from './components/Sidebar';

import Projects from './components/Projects';
import Works from './components/works/Works';



function App() {
  const [menuOpen, setMenuOpen] =  useState(false);
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Slider2/>
      <Projects/>
      <Works/>
      <Contact/>
      </div>
      
    </div>
  );
}

export default App;
