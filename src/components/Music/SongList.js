import React from 'react';
import SongCard from './SongCard';

const SongList = () => {
  return (
    <div className='songList'>
      {[1, 2, 3, 4, 5].map(() => (
        <SongCard />
      ))}
    </div>
  );
};

export default SongList;
