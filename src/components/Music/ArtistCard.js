import React from 'react';

const ArtistCard = ({ cover, name, genre }) => {
  return (
    <div className='artist'>
      <img className='cover' src={cover} />
      <div className='text'>
        <h2>{name}</h2>
        <div>{genre}</div>
      </div>
    </div>
  );
};

export default ArtistCard;
