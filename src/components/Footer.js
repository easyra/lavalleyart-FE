import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='items'>
          <div className='item'>
            <i class='fas fa-envelope' />
            <span className='title'>Email: </span>lavalleyart@gmail.com
          </div>
          <div className='item'>
            <i class='fab fa-facebook-f' />
            <span className='title'>Facebook: </span>facebook.com/lavalleyart
          </div>
          <div className='item'>
            <i class='fab fa-instagram' />{' '}
            <span className='title'>Instagram: </span>instagram.com/lavalleyart
          </div>
        </div>
        <div className='btn bold'>CONTACT US</div>
      </div>
    </footer>
  );
};
export default Footer;
