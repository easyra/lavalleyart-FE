import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import HomeContainer from './components/HomeContainer';
import { Route, Switch } from 'react-router-dom';
import PostPage from './components/PostPage';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Calender from './components/Calender';
import Music from './components/Music';
import BlogPage from './components/BlogPage';
import TVPage from './components/TVPage';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='wip'>This site is a work in progress</div>
      <Switch>
        <Route exact strict path='/post/:id' component={PostPage} />
        <Route exact strict path='/contact-us' component={ContactForm} />
        <Route exact strict path='/calender' component={Calender} />
        <Route exact strict path='/music' component={Music} />
        <Route exact strict path='/blog' component={BlogPage} />
        <Route exact strict path='/tv' component={TVPage} />
        <Route exact strict path='/' component={HomeContainer} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
