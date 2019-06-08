import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import HomeContainer from './components/HomeContainer';

function App() {
  return (
    <div className='App'>
      <Logo />
      <Navbar />
      <HomeContainer />
    </div>
  );
}

export default App;
