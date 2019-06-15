import React, { useState } from 'react';
import ArtistsList from './Music/ArtistsList';
import SongCard from './Music/SongCard';
import SongList from './Music/SongList';
import MixTapeCard from './Music/MixTapeCard';

const Music = () => {
  const artists = [
    {
      cover:
        'https://images.pexels.com/photos/1371177/pexels-photo-1371177.jpeg?cs=srgb&dl=adult-architecture-bandana-1371177.jpg&fm=jpg',
      name: 'Mathew Johnson',
      genre: 'Experimental'
    }
  ];
  for (let i = 0; i < 7; i++) {
    artists.push(artists[0]);
  }

  return (
    <div className='music'>
      <div className='content'>
        <ArtistsList artists={artists} />
        <MixTapeCard />
      </div>
    </div>
  );
};

export default Music;
