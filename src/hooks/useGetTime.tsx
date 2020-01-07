import {useState, useEffect} from 'react';

const useGetTime = (power: boolean) => {

  const [now, setNow] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    days: 0,
    months: 0,
    date: 0,
    amPM: ''
  })

  const time = new Date();

  const getAmPM = (hours: number) => {
    if (hours > 12) {
      return "PM";
    }
    return "AM"
  }

useEffect(() => {

     let tick = setInterval(() => {
       if (power) {
        setNow({...now,
          hours: +time.getHours(),
          minutes: +time.getMinutes(),
          seconds: +time.getSeconds(),
          days: +time.getDay(),
          months: +time.getMonth(),
          date: +time.getDate(),
          amPM: getAmPM(now.hours)
        })
       }
    }, 1000)
  return () => {
      clearInterval(tick);
  };
})
  return [now.hours, now.minutes, now.seconds, now.days, now.months, now.date, now.amPM] as [number, number, number, number, number, number, string];
};

export default useGetTime;