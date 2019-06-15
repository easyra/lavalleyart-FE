import React from 'react';
import ArtistCard from './ArtistCard';

const ArtistsList = ({ artists }) => {
  return (
    <div className='artists'>
      {artists.map(({ cover, name, genre }) => (
        <ArtistCard cover={cover} name={name} genre={genre} />
      ))}
    </div>
  );
};
export default ArtistsList;
