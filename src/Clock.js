
import React from 'react';
import Now from './components/Now';
import './Clock.css';

function Clock() {
   
  return (
    <div className="Clock">
     
      <Now/>
      {/* <AlarmTime/> */}
    </div>
  );
}

export default Clock;
