import React, { Component } from 'react';
import './css/Footer.css';

class Footer extends Component {
  render() {
      const {copyright= '&copy; React 2019' } = this.props;
    return (
      <div className="Footer">
            <a dangerouslySetInnerHTML ={{ __html: copyright}}/>
      </div>
    );
  }
}

export default Footer;