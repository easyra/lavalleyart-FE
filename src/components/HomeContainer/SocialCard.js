import React from 'react';

const SocialCard = () => {
  return (
    <div className='socials-card'>
      <h4 className='title'>FIND US HERE</h4>
      <div className='links'>
        <div className='link'>
          <i class='fab fa-facebook fa-2x' />
          <div className='url'>/lavalleyart</div>
        </div>
        <div className='link'>
          <i class='fab fa-instagram fa-2x' />
          <div className='url'>/lavalleyart</div>
        </div>
        <div className='link'>
          <i class='fab fa-youtube fa-2x' />
          <div className='url'>/lavalleyart</div>
        </div>
        <div className='link'>
          <i class='fab fa-itunes-note fa-2x' />
          <div className='url'>/lavalleyart</div>
        </div>
      </div>
    </div>
  );
};
export default SocialCard;
