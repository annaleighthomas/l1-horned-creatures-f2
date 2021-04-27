import { Component } from 'react';
import React from 'react';
import Header from './Header';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import creatures from './creatures-data';
import Footer from './Footer';
import './App.css';



class App extends Component {
  state = { creatures: creatures }

  handleSearch = ({ nameFilter, sortField }) => {
    const nameRegex = new RegExp(nameFilter, 'i');

    const searchedData = creatures
      .filter(creature => {
        return creature.title.match(nameRegex);
      })
      .sort((a, b) => { 
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });

    this.setState({ creatures: searchedData });
  }

  render() {
    const { creatures } = this.state;

    return (
      <div className="App">
  
        <Header/>

        <CreatureSearch onSearch={this.handleSearch}/>

        <main>
          <CreatureList creatures={creatures}/>
        </main>
        
        <Footer/>
      
      </div>
    );
  }

}

export default App;
