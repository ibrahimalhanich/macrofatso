import React from 'react';
// import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import './FrontPage.css';

const FrontPage = (props) => {
  return (
    <div className="FrontPage">
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <SearchBar
        user={props.user}
      />
    </div>
  );
};

export default FrontPage;