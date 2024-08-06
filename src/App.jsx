import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Clients from './Components/Clients';
import TravelTips from './Components/TravelTips';
import NewsLetter from './Components/NewsLetter';
// import { ReactComponent as MySvg } from './Components/abc.svg';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Clients />
      <TravelTips />
      <NewsLetter />

    </div>
  )
}

export default App;

// npm install vite-plugin-svgr


