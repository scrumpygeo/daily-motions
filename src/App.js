import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import Navbar from './components/Navabar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default App;
