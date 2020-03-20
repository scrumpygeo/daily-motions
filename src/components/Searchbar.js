import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (this.state.term === '') {
      this.props.setAlert('   Please enter a search term', 'danger');
    } else {
      this.props.onTermSubmit(this.state.term);
    }
  };

  render() {
    return (
      <div className='mt-2'>
        <form onSubmit={this.onFormSubmit}>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <span className='input-group-text'>Video Search</span>
            </div>
            <input
              type='text'
              onChange={this.onInputChange}
              value={this.state.term}
              className='form-control'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
