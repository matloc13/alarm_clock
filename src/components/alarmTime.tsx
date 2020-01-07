import React, { useState, FormEvent, ChangeEvent} from 'react';
import useStore from './../hooks/useStore';

const AlarmTime = () => {

  const [singleAlarm] = useStore();


  const hourArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
  const minArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59 ];
  const [power, setPower] = useState(Boolean);
  const [selectedTime, setSelectedTime] = useState({
    hour: '',
    min: '',
    amPm: " ",
    power: power
  });


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    singleAlarm.dispatchAlarm({
      type: "CREATE_ALARM",
      payload: {
        hour: selectedTime.hour,
        min: selectedTime.min,
        amPm: selectedTime.amPm,
        power: selectedTime.power,
      }
  })
    
  }
  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.id) {
      case "hour":
        return setSelectedTime({...selectedTime, hour: e.target.value});
      case "min":
        return setSelectedTime({...selectedTime, min: e.target.value});
      case "amPm":
        return setSelectedTime({...selectedTime, amPm: e.target.value});
      default:
        return;
    }
  }

  const handleCheckbox = (e:ChangeEvent<HTMLInputElement>) => {
    if (e.target.id) {
      console.log(e);
       setPower(!power);
    }
   
  }
  return (
    <aside>
      <div>
        <span className="hour-box">{selectedTime.hour}</span>
        <span>:</span>
        <span className="min-box">{selectedTime.min}</span>
        <span className="amPM">{selectedTime.amPm}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <select id="hour" onChange={handleSelect}>
          {
            hourArray.map((ele, i) => {
              return (
                <option key={i} value={ele < 10 ? `0${ele}`: ele}>{ele < 10 ? `0${ele}`: ele}</option>
              )
            })
          }
        </select>
        <select id="min" onChange={handleSelect}>
          {
            minArray.map((ele, i) => {
              return (
              <option key={i} value={ele < 10 ? `0${ele}`: ele}>{ele < 10 ? `0${ele}`: ele}</option>
              )
            }) 
          }
        </select>
        <select id="amPm" onChange={handleSelect}>
          <option value=""></option>
          <option value="am">am</option>
          <option value="pm">pm</option>
        </select>
        <input type="checkbox" id="power" onChange={handleCheckbox} value= "on"/>
        <input type="submit" value="save"/>
      </form>
      
    </aside>
  )
}

export default AlarmTime;