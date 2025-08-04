import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game';

class App extends Component {
  render(){
    return (
      <Game/>
    );
  }
}

export default App;
