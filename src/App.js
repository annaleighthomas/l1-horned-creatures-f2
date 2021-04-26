import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header';
import CreatureList from './CreatureList';
import creatures from './creatures-data';
import Footer from './Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
  
        <Header/>

        <main>
          <CreatureList creatures={creatures}/>
        </main>
        
        <Footer/>
      
      </div>
    );
  }

}

export default App;
