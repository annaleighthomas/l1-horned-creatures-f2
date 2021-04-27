import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {

  state = { nameSearch: '', sortField: '' }

  handleNameChange = ({ target }) => {
    this.setState({ nameSearch: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }
  
  render() {

    const { nameSearch, sortField } = this.state;

    return (
      <form className="CreatureSearch" onSubmit={this.handleSubmit}>

        <input 
          placeholder="horned creatures" 
          name="nameSearch" 
          value={nameSearch} 
          onChange={this.handleNameChange}
        />

        <select 
          name="nameSearch"
          value={sortField}
          onChange={this.handleSearchChange}
        />

        <select>
          <option value="">sort...</option>
          <option value="title">by name</option>
          <option value="horns">by horns</option>
        </select>

        <button>Search</button>

      </form>
    );
  }
}