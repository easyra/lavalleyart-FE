import React from 'react';

const ArticleCard = () => {
  return (
    <div className='article'>
      <img
        className='thumbnail'
        src='https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
      />
      <div className='text'>
        <h4 className='title'>This is the Title of the Article</h4>
        <h4 className='author'>Mathew Johnson</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
