import React from 'react';
import Paid from './images/paid.svg';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <img src={Paid} alt="Paid Logo" />
      </div>
    );
  }
}

export default Header;
