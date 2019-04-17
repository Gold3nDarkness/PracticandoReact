import React, { Component } from 'react';
import ProTypes from 'prop-types';

import logo from './img/logo.svg';
import './css/Header.css';

class Header extends Component {
  static ProTypes = {
      title: ProTypes.string.isRequired,
      items: ProTypes.array.isRequired
  }


  render() {
    const {title, items } = this.props;
    return (
      <div className="Header">
          <img src={logo} className="Logo" alt="logo" />
          <h2>{title}</h2>
          <ul className="Menu">
              {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
      </div>
    );
  }
}

export default Header;