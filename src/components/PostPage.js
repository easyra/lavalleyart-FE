import React from 'react';

const PostPage = () => {
  const { title, thumbnail, text, date } = {
    id: 0,
    title: 'Lorem Ispum',
    date: '6/7/18',
    thumbnail:
      'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  };
  return (
    <div className='postpage'>
      <div className='content'>
        <div className='post'>
          <h1 className='title'>{title}</h1>
          <h4 className='date'>{date}</h4>
          <img src={thumbnail} className='thumbnail' />
          <p className='text'>{text}</p>
        </div>
        <div className='featured'>
          <h1 className='main-title'>Featured Posts</h1>
          <div className='card'>
            <img src={thumbnail} className='thumbnail' />
            <h1 className='title'>{title}</h1>
            <h4 className='date'>{date}</h4>
          </div>
          <div className='card'>
            <img src={thumbnail} className='thumbnail' />
            <h1 className='title'>{title}</h1>
            <h4 className='date'>{date}</h4>
          </div>
          <div className='card'>
            <img src={thumbnail} className='thumbnail' />
            <h1 className='title'>{title}</h1>
            <h4 className='date'>{date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
