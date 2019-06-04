import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <ul>
      {props.countries.map(c => (<li><Link to={'/'+c.cca3}>{c.name.common}</Link></li>))}
    </ul>
    )
}

export default Navbar