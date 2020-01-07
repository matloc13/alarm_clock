import React, {useState, useEffect} from 'react';
import useGetTime from '../hooks/useGetTime';

const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const Now = () => {
  const [power, setPower] = useState(false);
  const [clock, setClock] = useState({
  clockHour: '',
  clockMinutes: '',
  clockSeconds: ''
  })
  const [hour, minutes, seconds, days, months, date, amPM] = useGetTime(power);

  useEffect(() => {
    if (hour || minutes || seconds) {
      if (hour > 12 ) {
        const civilianTime = hour - 12;
        setClock({...clock,
          clockHour: civilianTime.toString(),
          clockMinutes: minutes.toString(),
          clockSeconds: seconds.toString()
        })
      }else if (hour === 0) {
        const civilianTime = 12;
        setClock({...clock,
          clockHour: civilianTime.toString(),
          clockMinutes: minutes.toString(),
          clockSeconds: seconds.toString()
        })
      } else {
        setClock({...clock, 
          clockHour: hour.toString(),
          clockMinutes: minutes.toString(),
          clockSeconds: seconds.toString()
        })
      }

     
    }
    return () => {};
  }, [hour, minutes, seconds]);

 
  return (
    <div className="now-time-container">
    {
      power ? 
      <main>   

        <h2 className="now-time clock">

          <span>
            {hour > 0 &&
            hour < 10 ? `0${clock.clockHour}` : clock.clockHour}
          </span>

          <span className="colon"> : </span>

          <span>
            {minutes < 10 ? `0${clock.clockMinutes}` : clock.clockMinutes}
          </span>

          <span className="colon"> : </span>

          <span>
            {seconds < 10 ? `0${clock.clockSeconds}` : clock.clockSeconds}
          </span>
        </h2>
        <h6>
          <span>
            {amPM}
          </span>
        </h6>

        <h3>
          <span className="now-time day">{`${day[days]}`}</span> 
          <span className="now-time month">{` ${month[months]} ${date}`}</span>
        </h3>  

        <button onClick={()=>setPower(!power)}>off</button>

      </main>
    :
      <main>

        <button onClick={()=>setPower(!power)}>on</button>

      </main>
    }
    </div>
   
  )
}
export default Now; 