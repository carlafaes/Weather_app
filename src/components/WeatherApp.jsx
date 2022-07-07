import { useState,useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion'

//components
import InfoAstronomic from "./InfoAstronomic";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import ClimaExtendido from "./ClimaExtendido";
import WeatherForHours from "./WeatherForHours";
import InfoSun from "./InfoSun";

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
          `${process.env.REACT_APP_FORECAST}&key=${process.env.REACT_APP_API_KEY}&q=${city}&days=10&aqi=no&alerts=yes&lang=es`
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
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Pronostico Extendido</Accordion.Header>
          <Accordion.Body>
            <ClimaExtendido weather={weather} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Pronostico Por Horas</Accordion.Header>
          <Accordion.Body>
            <WeatherForHours weather={weather} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Informacion Astronomica</Accordion.Header>
          <Accordion.Body>
            <InfoAstronomic weather={weather} />
            <InfoSun weather={weather} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}