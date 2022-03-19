import React, { useState, useEffect } from 'react'
import './Nav.css'

const Nav = () => {
  const [show, handleShow] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true)
      } else handleShow(false)
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        src='https://i.ibb.co/GRDq2qt/Netflix-Logo-1.png'
        alt='Netflix Logo'
        className='nav__logo'
      />

      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Avatar'
        className='nav__avatar'
      />
    </div>
  )
}

export default Nav
