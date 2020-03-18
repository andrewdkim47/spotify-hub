import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Spotify from 'spotify-web-api-js';
import Artists from './artists';

const spotifyWebApi = new Spotify();

class App extends Component {

  constructor() {
    super();
    const params = this.getHashParams();
    this.state ={
      loggedIn: params.access_token ? true : false,
      userInfo: { username: "Johnny Apples", img: "user_image.jpg"},
      nowPlaying: {
        name: 'Not Checked',
        image: ''
      }
    }
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }
  
  getHashParams() { //gives object that has access token and refresh token
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  getUserInfo() {

  }

  getNowPlaying() {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response)=> {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            image: response.item.album.images[0].url
          }
        })
      })
  }

  render() {
    let loggedIn = this.state.loggedIn;
    let show;

    if (!loggedIn) {
      show = 
      <a href="http://localhost:8888">
          <button>Login With Spotify</button>
      </a>
    }
    else {
      show =
      <div>

        {/*<!-------HEADER------>*/}
        <div className="header-body">
          <div className="header">
            <div className="header-left">
              <span className="user-image">
                <img src={this.state.userInfo.img} alt="user_image"/>  &nbsp; &nbsp; {this.state.userInfo.username}
              </span>
            </div>
            <div className="header-right">
              <span>16,356 total hours </span>
              <span className="accents">&nbsp;&nbsp;|&nbsp; </span> 
              <span>&nbsp; settings</span>
            </div>
          </div>
        </div>
        {/*<!-------end of HEADER------>*/}

        {/*<!-------list layout------>*/}
        <div className="list-body">
          {/*<!-------TOP ARTISTS------>*/}
          <div className="artists">
            <h2 className="list-title">Top Artists</h2>
            <Artists/>
            <div className="list-entry">
                <span className="accents">&bull;&nbsp;&nbsp;&nbsp;</span>
                <span>Kendrick Lamar</span>
            </div>
            <div className="list-entry">
                <span className="accents">&bull;&nbsp;&nbsp;&nbsp;</span>
                <span>Epik High</span>
            </div>
          </div>
          {/*<!-------END OF TOP ARTISTS------>*/}

          {/*<!-------TOP TRACKS------>*/}
          <div className="tracks">
            <h2 className="list-title">Top Tracks</h2>
            <div className="list-entry">
                <span className="accents">&bull;&nbsp;&nbsp;&nbsp;</span>
                <span>Sunflower - Swae Lee ft. Post Maloneeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</span>
            </div>
            <div className="list-entry">
                <span className="accents">&bull;&nbsp;&nbsp;&nbsp;</span>
                <span>Snow - Zion.T</span>
            </div>
            <div className="list-entry">
                <span className="accents">&bull;&nbsp;&nbsp;&nbsp;</span>
                <span>Truth Hurts - Lizzo</span>
            </div>
          </div>
        </div>
        <div> Now Playing: { this.state.nowPlaying.name }</div>
        <div>
          <img src={ this.state.nowPlaying.image } style={{width: 100}}/>
        </div>
        <button onClick={() => this.getNowPlaying()}>
          Check Now Playing
        </button>


      </div>
    }

    return (
      <div className="App">
        {show}
      </div>
    );
  }
}

export default App;
