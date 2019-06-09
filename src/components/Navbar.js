import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Logo from './Logo';

const Navbar = ({ match, history }) => {
  const handleClick = e => {
    const { id } = e.target;
    history.push(`/${id}`);
    setShowMobile(false);
  };
  const [showMobile, setShowMobile] = useState(false);
  const menuClick = () => {
    setShowMobile(!showMobile);
  };
  return (
    <header className='navbar'>
      <Logo handleClick={handleClick} />
      <nav className='content'>
        <ul className='nav-items'>
          <li id='' onClick={menuClick} className='nav-item menu'>
            <i class={`fas fa-${showMobile ? 'times' : 'bars'} fa-2x`} />
          </li>

          <li
            id=''
            onClick={handleClick}
            className={`nav-item first ${showMobile && 'active'}`}
          >
            home
          </li>

          <li
            id='calender'
            onClick={handleClick}
            className={`nav-item ${showMobile && 'active'}`}
          >
            calender
          </li>
          <li
            id='tv'
            onClick={handleClick}
            className={`nav-item ${showMobile && 'active'}`}
          >
            tv
          </li>
          <li
            id='music'
            onClick={handleClick}
            className={`nav-item ${showMobile && 'active'}`}
          >
            music
          </li>
          <li
            id='blog'
            onClick={handleClick}
            className={`nav-item ${showMobile && 'active'}`}
          >
            blog
          </li>
          <li
            id='podcast'
            onClick={handleClick}
            className={`nav-item ${showMobile && 'active'}`}
          >
            podcast
          </li>
          <li
            id='contact-us'
            onClick={handleClick}
            className={`nav-item last ${showMobile && 'active'}`}
          >
            contact us
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navbar);
