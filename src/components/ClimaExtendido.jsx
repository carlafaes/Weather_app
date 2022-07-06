import { useEffect, useState } from "react";
import { BsArrowDownSquareFill, BsArrowUpSquareFill} from 'react-icons/bs';

export default function ClimaExtendido({weather}){



    return(
        <div>
            <h2>Pronostico extendido</h2>
            {weather ? 
            weather.forecast.forecastday.map((day,index)=>(
                <div key={index}>
                    <div>
                        <p><BsArrowDownSquareFill/>{day.day.mintemp_c}º</p>
                        <p><BsArrowUpSquareFill/>{day.day.maxtemp_c}º</p>
                    </div>
                    <img src={`http:${day.day.condition.icon}`}/>
                    <p>{day.day.condition.text}</p>
                </div>
            ))
        : 
        <div>Buscando clima</div>}
            
        </div>
    )
}