import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MoodChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMood: 'happy',
      face: ':-)',
      currentMoodIdx: 0,
      moods: ['happy', 'sad', 'angry', 'neutral']
    };

    this.changeMood = this.changeMood.bind(this);
  }

  changeMood() {
    // fill me in
    const faces = [':-)', ':-(', '>:-(', '-_-'];
    let counter = this.state.currentMoodIdx; 
    if(counter < 3) {
        counter++;
    } else {
      counter = 0;
    }
    this.setState({
                currentMood: this.state.moods[counter],
                face: faces[counter],
                currentMoodIdx: counter,
     })    
}

  render() {
    return (
      <div>
        <h1>{this.state.face}</h1>
        <button onClick={this.changeMood}> Change Mood </button>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoodChanger />
      </div>
    );
  }
}

export default App;
