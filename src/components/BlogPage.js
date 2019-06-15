import React from 'react';
import MixTapeCard from './Music/MixTapeCard';
import ArticlesLast from './BlogPage/ArticlesList';

const BlogPage = () => {
  return (
    <div className='blog'>
      <div className='content'>
        <ArticlesLast />
        <MixTapeCard />
      </div>
    </div>
  );
};

export default BlogPage;
