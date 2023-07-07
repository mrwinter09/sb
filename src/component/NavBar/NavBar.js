/** @format */

import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <div className="background">
      <div className="nav-container">
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="" className="icon"></img>
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/blogpage">Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
