import { useState,useEffect } from "react";
import style from './styles/WeatherApp.module.css';
import Accordion from 'react-bootstrap/Accordion';
import {FiAlertTriangle } from 'react-icons/fi';
import { Ri24HoursLine,RiMoonClearLine } from 'react-icons/ri';
import { BsCalendar3 } from 'react-icons/bs';

//components
import InfoAstronomic from "./InfoAstronomic";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";
import ClimaExtendido from "./ClimaExtendido";
import WeatherForHours from "./WeatherForHours";
import InfoSun from "./InfoSun";
import Alerts from "./Alerts";
import Footer from "./Footer";
import Spinner from "./Spinner";

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
    <div className={style.weather}>
      {weather ? 
      <center>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <WeatherMainInfo weather={weather} />
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header><BsCalendar3/> Pronostico Extendido </Accordion.Header>
          <Accordion.Body>
            <ClimaExtendido weather={weather} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header><Ri24HoursLine/>Pronostico Por Horas</Accordion.Header>
          <Accordion.Body>
            <WeatherForHours weather={weather} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header><FiAlertTriangle/>Alertas Metereológicas </Accordion.Header>
          <Accordion.Body>
            <Alerts weather={weather} />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header><RiMoonClearLine/>Informacion Astronomica Extendida</Accordion.Header>
          <Accordion.Body>
            <InfoAstronomic weather={weather} />
            <InfoSun weather={weather} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </center>
      :
      <div>
        <br/>
        <Spinner />
      </div>
        }
      <br/>
      <Footer />
    </div>
  );
}