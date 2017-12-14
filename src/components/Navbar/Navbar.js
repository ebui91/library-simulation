import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


class Navbar extends Component{
  render(){
    return(
      <div className='nav-main-container'>
        <div className='nav-left'>
          <h3>LOGO</h3>
          <Link to='/browsing'>
            <h3>BROWSE</h3>
          </Link>
          
          <h3>CART</h3>
          <h3>MY SHELF</h3>
        </div>

        <div className='nav-right'>
          <button className='btn log-btn'>Login/Logout</button>
        </div>
      </div>
    )
  }
}

export default Navbar;
