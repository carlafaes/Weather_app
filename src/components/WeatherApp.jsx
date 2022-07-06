import { useState,useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import ClimaExtendido from "./ClimaExtendido";

export default function WeatherApp() {

    const [weather,setWeather] = useState(null);
    const [city,setCity] = useState('london');

    useEffect(() => {
      loadInfo();
    },[])
    
    useEffect(()=>{
      document.title = `Ẁeather | ${weather?.location.name ?? ""}`; // cambia el nombre del documento al de la ciudad que se esta buscando
    },[weather])

    function handleChangeCity(city){
      setWeather(null);
      loadInfo(city);
    }
    
    async function loadInfo(city='london'){
      try{
        const request= await fetch(
          `${process.env.REACT_APP_FORECAST}&key=${process.env.REACT_APP_API_KEY}&q=${city}&days=9&aqi=no&alerts=yes&lang=es`
          );
          const json= await request.json();
          console.log(json);
          setWeather(json);
      }
      catch(err){
        console.log(err);
      }
    }
  return (
    <div className="weather-app">
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather} />
      <ClimaExtendido weather={weather} />
    </div>
  );
}