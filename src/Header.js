import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <img className="logo" alt="creature logo" src="https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003"/>

        <h1>Horned Creatures</h1>
        
      </header>
    );
  }
}


export default Header;