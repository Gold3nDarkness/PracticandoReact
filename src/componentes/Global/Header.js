import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import ProTypes from 'prop-types';
import {selectVentana} from '../Methods/HeaderActions';

import {connect} from 'react-redux';

import './css/Header.css';

class Header extends Component {
  static ProTypes = {
      title1:   ProTypes.string.isRequired,
      title: ProTypes.string.isRequired,
      items: ProTypes.array.isRequired,
  }

 
  render() {
    const {title, items,title1} = this.props;
    return (
      <div className="Header">
       {/*   <img src={logo} className="Logo" alt="logo" />*/}
          <h3>{title}</h3><h4>{title1}</h4>
          <nav>
            <ul>
              {items && items.map((item, key) => <li key={key}>{item.title}  </li>)}
            </ul>
          </nav>
      </div> 
    );
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({selectVentana: selectVentana}. dispatch)
}

function mapStateToProps(state){
  return{
    items: state.items
  };
}

export default connect(mapStateToProps)(Header);
