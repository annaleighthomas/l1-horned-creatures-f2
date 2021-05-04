import { Component } from 'react';
import React from 'react';
import Header from './Header';
import CreatureSearch from './CreatureSearch';
import CreatureList from './CreatureList';
import creatures from './creatures-data';
import Footer from './Footer';
import request from 'superagent';
import './App.css';

const CREATURES_DATA = 'https://back-end-setup-l6-f2.herokuapp.com/data/creatures/';

class App extends Component {

  state = { creatures: creatures }

  handleSearch = ({ nameSearch, sortField }) => {
    const nameRegex = new RegExp(nameSearch, 'i');

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

  async componentDidMount() {
    //this is where i called API 
    const response = await request.get(CREATURES_DATA);
    this.setState({ creatures: response.body });
    //this is where i set my state and named it 'pokemonData'
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