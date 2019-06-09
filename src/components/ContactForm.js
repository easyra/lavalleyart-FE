import React from 'react';

const ContactForm = () => {
  return (
    <div className='contact'>
      <div className='content'>
        <div className='text'>
          <div className='title'>GET IN TOUCH</div>
          <div className='paragraph'>
            The LA Valley Arts Collective is a group of friends helping friends
            create. Whether its music, painting, animation, writing, dance,
            film, comedy, or anything else, we want to work with you! We are
            constantly looking for like-minded artistic individuals to showcase
            their art and collaborate with.
          </div>
          <div className='socials'>
            <i class='fab fa-facebook-f fa-2x icon' />
            <i class='fab fa-youtube fa-2x icon' />
            <i class='fab fa-instagram fa-2x icon' />
          </div>
        </div>
        <div className='form'>
          <div className='row'>
            <input placeholder='*Name' />
            <input placeholder='*Email' />
          </div>
          <input placeholder='*Subject' />
          <textarea placeholder='*Message' />
          <div className='send'>Send</div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
