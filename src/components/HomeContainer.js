import React from 'react';
import Banner from './HomeContainer/Banner';

import PostCardList from './HomeContainer/PostCardList';

const HomeContainer = () => {
  const posts = [
    {
      id: 0,
      title: 'Lorem Ispum',
      date: '6/7/18',
      thumbnail:
        'https://images.pexels.com/photos/1876279/pexels-photo-1876279.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
  for (let i = 0; i < 10; i++) {
    posts.push(posts[0]);
  }
  const isWhitespace = new RegExp('[s]');
  return (
    <div className='home'>
      <Banner />
      <PostCardList posts={posts} />
    </div>
  );
};

export default HomeContainer;
