/** @format */

import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  return (
    <Link to="/">
      <div className="background">
        <div className="nav-container">
          <div className="navbar">
            <img src={logo} alt="" className="icon"></img>
          </div>
          <div className="nav-link">
            <Link to="/">Home</Link>
            <Link to="/blogpage">Blog</Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NavBar
