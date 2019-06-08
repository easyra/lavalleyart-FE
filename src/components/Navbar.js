import React from 'react';
import { withRouter } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ match, history }) => {
  const handleClick = e => {
    const { id } = e.target;
    history.push(`/${id}`);
  };
  return (
    <header className='navbar'>
      <Logo handleClick={handleClick} />
      <nav className='content'>
        <ul className='nav-items'>
          <li id='' onClick={handleClick} className='nav-item'>
            home
          </li>
          <li id='calender' onClick={handleClick} className='nav-item'>
            calender
          </li>
          <li id='tv' onClick={handleClick} className='nav-item'>
            tv
          </li>
          <li id='music' onClick={handleClick} className='nav-item'>
            music
          </li>
          <li id='blog' onClick={handleClick} className='nav-item'>
            blog
          </li>
          <li id='podcast' onClick={handleClick} className='nav-item'>
            podcast
          </li>
          <li id='contact-us' onClick={handleClick} className='nav-item'>
            contact us
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
