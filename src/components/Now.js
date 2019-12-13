import React, {useState} from 'react';
import useGetTime from './../timeUseys/useGetTime';
const Now = () => {
const [power, setPower] = useState(false);
const [hour, minutes, seconds] = useGetTime(power);
  
  return (
    <>
    {
      power ? 
      <main>
      <span>{hour}</span>
      <span>:</span>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
     
      <button onClick={()=>setPower(!power)}>off</button>
    </main>
    :
    <main>
    <button onClick={()=>setPower(!power)}>on</button>
    </main>
    }
    </>
   
  )
}
export default Now; 