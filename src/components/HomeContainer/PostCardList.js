import PostCard from './PostCard';
import { Link } from 'react-router-dom';
import React from 'react';

const PostCardList = ({ posts }) => {
  return (
    <div className='post-list'>
      {posts.map(({ title, date, text, id, thumbnail }) => {
        if (text.length > 150) {
          const textCopy = text.slice(0, 151);
          text = textCopy.trimRight() + '...';
        }
        return (
          <PostCard
            title={title}
            date={date}
            text={text}
            id={id}
            thumbnail={thumbnail}
          />
        );
      })}
    </div>
  );
};

export default PostCardList;
