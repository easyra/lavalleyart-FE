import React, { useState } from 'react';
import EventList from './Calender/EventList';
import PastEventList from './Calender/PastEventList';
const Calender = () => {
  const dummyData = [
    {
      cover:
        'https://images.pexels.com/photos/2464638/pexels-photo-2464638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      date: 'Jun 13',
      name: 'Event Name',
      time: '11pm-12pm'
    }
  ];
  for (let i = 0; i < 7; i++) {
    dummyData.push(dummyData[0]);
  }
  const [events, setEvents] = useState(dummyData);

  return (
    <div className='calender'>
      <div className='content'>
        <div className='current'>
          <h2>Upcoming Events</h2>
          <EventList events={events} />
        </div>
        <div className='past'>
          <h2>Past Events</h2>
          <PastEventList events={events} />
        </div>
      </div>
    </div>
  );
};
export default Calender;
