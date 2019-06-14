import React from 'react';
const Calender = () => {
  return (
    <div className='calender'>
      <div className='content'>
        <div className='current'>
          <h2>Future Events</h2>
          <div className='events'>
            <div className='event'>
              <img src='' alt='Event Name' />
              <div className='text'>
                <h4>Event Name</h4>
                <div className='date'>6/13/19</div>
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
