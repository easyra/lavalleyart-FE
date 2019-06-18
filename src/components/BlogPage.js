import React from 'react';
import MixTapeCard from './Music/MixTapeCard';
import ArticlesLast from './BlogPage/ArticlesList';
import SocialCard from './HomeContainer/SocialCard';

const BlogPage = () => {
  return (
    <div className='blog'>
      <div className='content'>
        <ArticlesLast />
        <SocialCard />
      </div>
    </div>
  );
};

export default BlogPage;
