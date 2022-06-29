import { useState } from "react";
import WeatherForm from "./WeatherForm";


export default function WeatherApp() {

    const [weather,setWeather] = useState(null);

    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    async function loadInfo(city='london'){
      try{
        const request= await fetch(
          `${process.env.REACT_APP_API_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}`);
          const json= request.json();
          console.log(json);
      }
      catch(err){
        console.log(err);
      }
    }
  return (
    <div className="weather-app">
      <WeatherForm onChangeCity={handleChangeCity}/>
    <div>info</div>
    </div>
  );
}