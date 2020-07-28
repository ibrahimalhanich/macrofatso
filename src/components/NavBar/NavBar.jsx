import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar'

const NavBar = (props) => {
  let nav = props.user ?
    <Navbar bg="light" variant="light">
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
    </Navbar>
    :
    <Navbar bg="light" variant="light">
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </Navbar>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;