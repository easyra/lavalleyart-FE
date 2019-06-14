import React from 'react';
import PastEvent from './PastEvent';

const PastEventList = ({ events }) => {
  return (
    <div className='events'>
      {events.map(({ cover, name, date, time }) => (
        <PastEvent cover={cover} name={name} date={date} time={time} />
      ))}
    </div>
  );
};

export default PastEventList;
