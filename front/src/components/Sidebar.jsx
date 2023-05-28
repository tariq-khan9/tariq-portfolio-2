import React from 'react'
import sidebar from './sass/sidebar.scss'

export default function Sidebar({menuOpen, setMenuOpen}) {
  return (
    <div className={'sidebar ' +(menuOpen && 'active')}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}><a href='#intro'>Intro</a></li>
        <li onClick={()=>setMenuOpen(false)}><a href='#slider'>Projects</a></li>
        <li onClick={()=>setMenuOpen(false)}><a href='#testimonials'>Testimonials</a></li>
        <li onClick={()=>setMenuOpen(false)}><a href='#contact'>Contact</a></li>
      </ul>
    </div>
  )
}
