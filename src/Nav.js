import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
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
