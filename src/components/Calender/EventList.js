import React from 'react';
import Event from './Event';

const EventList = ({ events }) => {
  return (
    <div className='events'>
      {events.map(({ cover, name, date, time }) => (
        <Event cover={cover} name={name} date={date} time={time} />
      ))}
    </div>
  );
};

export default EventList;
