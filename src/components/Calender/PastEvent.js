import React from 'react';

const PastEvent = ({ cover, name, date, time }) => {
  return (
    <div className='event'>
      <img className='cover' src={cover} alt={name} />
      <div className='text'>
        <h4 className='event-name'>{name}</h4>
        {/* <div className='time'>{time}</div> */}
        <div className='date'>{date}</div>
      </div>
    </div>
  );
};
export default PastEvent;
