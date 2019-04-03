import React from 'react';
import logo from 'src/logo.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" width={50} height={50} />
      <div>Custom hooks workshop</div>
    </header>
  );
}

export default Header;
