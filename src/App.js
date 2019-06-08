import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import HomeContainer from './components/HomeContainer';
import { Route, Switch } from 'react-router-dom';
import PostPage from './components/PostPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Route exact strict path='/post/:id' component={PostPage} />
        <Route exact strict path='/' component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
