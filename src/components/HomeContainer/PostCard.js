import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ thumbnail, title, date, text, id }) => {
  return (
    <div className='card'>
      <div className='thumbnail-container'>
        <img className='thumbnail' src={thumbnail} />
      </div>
      <div className='text'>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{text}</p>
      </div>
      <Link to={`/post/${id}`} className='btn'>
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
