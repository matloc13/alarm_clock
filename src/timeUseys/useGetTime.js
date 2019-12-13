import {useState, useEffect} from 'react';
const useGetTime = (power) => {

  const [now, setNow] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const time = new Date();
  // console.log(time);
  

useEffect(() => {


     let tick = setInterval(() => {
      setNow({...now,
        hours: +time.getHours(),
        minutes: +time.getMinutes(),
        seconds: +time.getSeconds()
      })
    })

  return () => {
      clearInterval(tick);
  };
})


 

  return [now.hours, now.minutes, now.seconds];
};

export default useGetTime;