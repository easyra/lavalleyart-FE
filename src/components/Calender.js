import React from 'react';
const Calender = () => {
  return (
    <div className='calender'>
      <div className='content'>
        <div className='current'>
          <h2>Upcoming Events</h2>
          <div className='events'>
            <div className='event'>
              <div className='cover-container'>
                <img
                  className='cover'
                  src='https://images.pexels.com/photos/2464638/pexels-photo-2464638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt='Event Name'
                />
                <div className='date'>
                  <div className='month'>Jun</div> 13
                </div>
              </div>

              <div className='text'>
                <h4 className='event-name'>Event Name</h4>
                <div className='time'>11pm-12pm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calender;
