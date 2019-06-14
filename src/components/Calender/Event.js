import React from 'react';
const Event = ({ cover, name, date, time }) => {
  date = date.split(' ');
  return (
    <div className='event'>
      <div className='cover-container'>
        <img className='cover' src={cover} alt={name} />
        <div className='date'>
          <div className='month'>{date[0]}</div> {date[1]}
        </div>
      </div>

      <div className='text'>
        <h4 className='event-name'>{name}</h4>
        <div className='time'>{time}</div>
      </div>
    </div>
  );
};
export default Event;
