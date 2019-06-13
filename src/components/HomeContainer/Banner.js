import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner'>
      <img
        className='picture'
        src='https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
      />
      <div className='header'>
        <h1 className='title'>LA VALLEY ART</h1>
        <div className='calls'>
          <Link className='btn cta'>CLICK ME</Link>
          <Link className='btn '>LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
