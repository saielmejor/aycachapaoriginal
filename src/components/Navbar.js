import React, { Fragment,useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
//setState 
const [click,setClick]=useState(false); 
const handleClick=()=>setClick(!click); 
const closeMobileMenu=()=>setClick(false)


  return (
    <Fragment>
      <nav className='navbar'>
        <div className='nav-container'>
          <Link to="/" className='nav-logo' onClick={closeMobileMenu}>
       <img className="nav-logo-img" src="image/logo.png" alt="logo" />
          </Link>
          <div className='nav-menu_icon' onClick={handleClick}>
          
            <i className={click ? "fas fa-times" :"fas fa-bars"}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu' }>
          <li className='nav-item'>
            <a className="nav-links"
                href="https://aycachapas.ola.click/products"
                target="_blank"
                aria-label="Aycachapas">Order Now</a>
            </li>
            {/* <li className='nav-item'>
              <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link to="/menu" className='nav-links' onClick={closeMobileMenu}>
              Menu
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to="/gallery" className='nav-links' onClick={closeMobileMenu}>
             Gallery   
              </Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to="/locations" className='nav-links' onClick={closeMobileMenu}>
                Locations
              </Link>{" "}
            </li>
            <li className='nav-item'>
              <Link to="/about-us" className='nav-links'
              onClick={closeMobileMenu}>
                About Us
              </Link>{" "}
            </li>
            
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
