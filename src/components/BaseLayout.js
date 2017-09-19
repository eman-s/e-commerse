import React, { Component } from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <div className="navigation">
          <section className='links'>
            <NavLink to='/' activeClassName='selected' className='navLinks'>Home</NavLink>
            <NavLink to='/vehicles/' activeClassName='selected' className='navLinks'>Vehicles</NavLink>
            <NavLink to='/weapons/' activeClassName='selected' className='navLinks'>Weapons</NavLink>
            <NavLink to='/misc/' activeClassName='selected' className='navLinks'>Miscellaneous</NavLink>
          </section>
          <h1>Sci-Fi Post-Apocalypse R Us</h1>
        </div>
          <br/>


        <div className='content'>
        {this.props.children}
        </div>
      </div>
    );
  }
}
