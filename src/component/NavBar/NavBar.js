/** @format */

import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <Link to="/">
      <div className="background">
        <div className="nav-container">
          <div className="navbar">
            <FaCoins className="icon" />
            <h1>
              Social <span className="purple">Brothers</span>
            </h1>
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
