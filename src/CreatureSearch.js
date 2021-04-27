import { Component } from 'react';
import './CreatureSearch.css';

export default class CreatureSearch extends Component {
  
  render() {
    return (
      <form className="CreatureSearch">

        <input placeholder="horned creatures"/>

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