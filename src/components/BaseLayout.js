import React, { Component } from 'react';
import '../App.css';
import {NavLink} from 'react-router-dom'

export default class BaseLayout extends Component {
  render() {
    return (
      <div className="baseLayout">
        <div className="navigation">
          <NavLink to='/' activeStyle={{color:'red'}}>Home</NavLink>
          <NavLink to='/vehicles' activeClassName='selected'>Vehicles</NavLink>
          <NavLink to='/weapons' activeClassName='selected'>Weapons</NavLink>
          <NavLink to='/misc' activeClassName='selected'>Miscellaneous</NavLink>
        </div>
        <div className='content'>
        {this.props.children}
        </div>
      </div>
    );
  }
}
