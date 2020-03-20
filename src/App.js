import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar />
      </div>
    );
  }
}

export default App;