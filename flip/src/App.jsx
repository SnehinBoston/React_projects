import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FlipCoin from './components/FlipCoin'

const App=()=>{
  return(
    <div className="App">
      <FlipCoin/>
    </div>
  );
}
export default App;