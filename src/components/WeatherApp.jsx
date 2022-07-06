import { useState,useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import Clima_extendido from "./Clima_extendido";

export default function WeatherApp() {

    const [weather,setWeather] = useState(null);

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
          `${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}`
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
      <Clima_extendido weather={weather} />
    </div>
  );
}