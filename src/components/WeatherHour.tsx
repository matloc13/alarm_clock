import React, {useState, useEffect, MouseEvent} from 'react';
import API from './../constants';

const WeatherHour = () => {

  const apiInit = {
    baseUrl: `api.openweathermap.org/data/2.5/weather?zip=`,
    zipC: 60608,
    api: `&APPID=${API}`
  }

  const [weatherInfo, setWeatherInfo] = useState()

  // useEffect(() => {
  //   const ac = new AbortController();
  //   updateWeather();
  //   return () => {
  //     ac.abort()
  //   };
  // }, [])

  const updateWeather = async () => {
    try {

      const weatherResult = await fetch(`${apiInit.baseUrl}${apiInit.zipC},us${apiInit.api}`)
      console.log(weatherResult);
  
    
      
  
      // const weather = await new Promise((resolve) => {
      //   console.log(weatherJSON);
        
      //   return resolve(
      //     setWeatherInfo({weatherJSON})
      //   )
      // })
      
    } catch (error) {
      // console.error(error);
      
    }

  
return 
    
  }

  const handleFind = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateWeather();
  }


  return (
    <main>
      right now it is in wonderful {apiInit.zipC}.
      <div>
        <button
          onClick={handleFind}
        >getweather</button>

      </div>
    </main>
  )
}

export default WeatherHour;