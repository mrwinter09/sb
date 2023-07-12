/** @format */
import './NavBar.css'
import React from 'react'
import { cx } from '../../utils/classnames'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const NavBar = () => {
  const location = useLocation()

  return (
    <header className="background">
      <div className="nav-container">
        <div className="navbar">
          <Link to="/">
            <img src={logo} alt="" className="icon"></img>
          </Link>
        </div>
        <nav className="nav-link">
          <Link
            to="/"
            className={cx([location.pathname === '/' && 'nav-link--active'])}>
            Home
          </Link>
          <Link
            to="/blogpage"
            className={cx([
              location.pathname === '/blogpage' && 'nav-link--active',
            ])}>
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
