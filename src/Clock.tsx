import React, { useContext } from 'react';
import StoreContext from './contexts/StoreContext';
// import StoreReducer from './reducers/storeReducer';
import Now from './components/Now';
import WeatherHour from './components/WeatherHour';
import './Clock.scss';
import AlarmTime from './components/alarmTime';

function Clock() {


const store = useContext(StoreContext);
   
  return (
    <StoreContext.Provider value={store}>
    <div className="Clock">
      <Now/>
      <WeatherHour />
      <AlarmTime />
    </div>
    </StoreContext.Provider>
  );
}

export default Clock;
