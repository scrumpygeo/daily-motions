import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import Navbar from './components/Navabar';
import Alert from './components/Alert';
import VideoList from './components/VideoList';
import dailymotion from './components/apis/dailymotion';
import './App.css';

class App extends Component {
  state = {
    videos: [],
    alert: null
  };

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  onTermSubmit = async term => {
    try {
      const resp = await dailymotion.get(
        `/videos?fields=channel.name%2Cthumbnail_url%2Cid%2Ctitle&search=${term}`
      );
      this.setState({ videos: resp.data.list });
      // console.log(resp.data.list);
    } catch (err) {
      this.setState({ errorMessage: err });
      // console.log(this.state.errorMessage);
    }
  };

  render() {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <SearchBar
            onTermSubmit={this.onTermSubmit}
            setAlert={this.setAlert}
          />
          <VideoList videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
