import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../pages/style.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [menuClick, setmenuClick] = useState('/');
  
  useEffect(() => {
    setmenuClick(location.pathname)
  }, [location])

  const goToHome = () => {
    navigate('/')
  }


  return (
    <>
      <div className='header'>
        <div className='logo' onClick={goToHome}>
          <img src='images/logo.webp' alt='logo' />
          <h1>MUSIFi</h1>
        </div>
        <nav>
          <ul className="nav-ul">
            <li id={menuClick === '/' ? 'active' : ''}>
              <Link className='link' to="/">Home</Link>
            </li>
            <li id={menuClick === '/products' ? 'active' : ''} >
              <Link className='link' to="/products">Music</Link>
            </li>
            <li id={menuClick === '/about-us' ? 'active' : ''} >
              <Link className='link' to="/about-us">About Us</Link>
            </li>
            <li id={menuClick === '/contact-us' ? 'active' : ''} >
              <Link className='link' to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar