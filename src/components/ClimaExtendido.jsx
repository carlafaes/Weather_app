import { BsArrowDownSquareFill, BsArrowUpSquareFill} from 'react-icons/bs';

export default function ClimaExtendido({weather}){



    return(
        <div>
            <h2>Pronostico extendido</h2>
            {weather ? 
            weather.forecast.forecastday.map((day,index)=>(
                <div key={index}>
                    <div>
                        <h3>{day.date}</h3>
                        <p><BsArrowDownSquareFill/>{day.day.mintemp_c}º</p>
                        <p><BsArrowUpSquareFill/>{day.day.maxtemp_c}º</p>
                    </div>
                    <div>
                        <p>Viento {day.day.maxwind_kph}km/h</p>
                        <p>Humedad {day.day.avghumidity}%</p>
                        <p>Precipitaciones {day.day.totalprecip_mm}mm</p>
                    </div>
                    <img src={`http:${day.day.condition.icon}`} alt={day.day.condition.text}/>
                    <p>{day.day.condition.text}</p>
                    
                </div>
            ))
        : 
        <div>Buscando clima</div>}
            
        </div>
    )
}