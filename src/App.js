import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import Navbar from './components/Navabar';
import Alert from './components/Alert';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import dailymotion from './components/apis/dailymotion';
import './App.css';
import VideoItem from './components/VideoItem';

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

  componentDidMount() {
    this.onTermSubmit('cats');
  }

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
        <div className='container'>
          <Navbar />
          <Alert alert={this.state.alert} />
          <SearchBar
            onTermSubmit={this.onTermSubmit}
            setAlert={this.setAlert}
          />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 border border-dark'>
              <VideoDetail />
            </div>
            <div className='col-md-4 border border-primary'>
              <VideoList videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
