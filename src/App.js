import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import Navbar from './components/Navabar';
import Alert from './components/Alert';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import dailymotion from './components/apis/dailymotion';
import './App.css';

class App extends Component {
  state = {
    videos: [],
    alert: null,
    selectedVideo: null
  };

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  componentDidMount() {
    this.onTermSubmit('cats');
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async term => {
    try {
      const resp = await dailymotion.get(
        `/videos?fields=channel.name%2Cthumbnail_url%2Cid%2Ctitle&search=${term}`
      );
      this.setState({
        videos: resp.data.list,
        selectedVideo: resp.data.list[0]
      });
    } catch (err) {
      this.setState({ errorMessage: err });
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
            <div className='col-md-8 '>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='col-md-4 '>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
