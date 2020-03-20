import React, { Component } from 'react';

class Searchbar extends Component {
  state = {
    term: ''
  };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div className='mt-2'>
        <form>
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
