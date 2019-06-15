import React, { useState } from 'react';
const SongCard = () => {
  const [playSong, setPlaySong] = useState(false);
  const onClick = () => {
    setPlaySong(!playSong);
  };
  return (
    <div className='song' onClick={onClick}>
      <i className={`fas fa-${playSong ? 'pause' : 'play'}`} />
      <div className='container'>
        <h4>Hey Hey - Mathew Johnson</h4>
        <div className='meter'>
          <span className='progress' />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
