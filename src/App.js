import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Banner from './components/Banner';
import YouTube from './components/YouTube';
import videos from './videos';
import Hero from './components/Hero';
import Ham from './components/Ham';

const reversedVideos = videos.slice().reverse();

class App extends Component {
  startMusic = el => {
    el.volume = 0.05;
    el.play();
  };

  render() {
    return (
      <Root>
        <Bird/>
        <Hero/>
        <Fire/>
        <Content>
          <Left></Left>
          <Center>
            <audio controls ref={this.startMusic}>
              <source src={music} type="audio/mpeg"/>
            </audio>
            <h1>Season 4</h1>
            <VideoList>
              {reversedVideos.map(video => 
                <VideoListItem>
                  <h2>Week {video.week}</h2>
                  <YouTube videoId={video.videoId}/>
                </VideoListItem>
              )}
            </VideoList>
            <WorldWebDesign/>
          </Center>
          <Right></Right>
        </Content>
        <Ham/>
        <Baby/>
      </Root>
    );
  }
}

export default App;

const music = require('./assets/music.mp3');

const Root = styled.div`
  background-color: black;
  color: white;
  background: url('${require('./assets/bg.gif')}') repeat;
  font-family: "Comic Sans MS", cursive, sans-serif;
  cursor: url('${require('./assets/cursor.png')}'), auto !important;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`

`;

const Center = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: rgba(0,0,0,0.8);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Right = styled.div``;


const Fire = styled.img.attrs({src: require('./assets/fire.gif')})`
  width: 100%;
`;

const VideoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const VideoListItem = styled.li`

`;

const WorldWebDesign = styled.img.attrs({src: require('./assets/world_web_design.gif')})`
  max-width: 400px;
  margin: 100px auto 100px;
  align-self: center;
`;

const Music = styled.audio.attrs({
  controls: true,
  children() {

  }
})``;

const Baby = styled.img.attrs({src: require('./assets/dancing-baby.gif')})`
  height: 50px;
`;

const birdAnimation = keyframes`
  0% {
    right: -20%;
  }
  100% {
    right: 150%;
  }
`;

const Bird = styled.img.attrs({src: require('./assets/bird.gif')})`
  position: absolute;
  right: -20%;
  top: 0;
  height: 50px;
  z-index: 10;
  animation: 10s ${birdAnimation} ease;
  animation-iteration-count: infinite;
`;
