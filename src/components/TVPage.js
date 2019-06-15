import React from 'react';
import VideoCard from './TVPage/VideoCard';
import MixTapeCard from './Music/MixTapeCard';

const TVPage = () => {
  return (
    <div className='tv'>
      <div className='content'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/EopKKBASaVs'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        />
        <MixTapeCard />
      </div>
      <div className='content'>
        <div className='video-feed'>
          <h2 className='title'>Lastest LAVA YouTube</h2>
          <div className='videos'>
            <VideoCard />
            <VideoCard />

            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TVPage;
