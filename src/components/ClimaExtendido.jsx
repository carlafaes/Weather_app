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
                    <div>
                        <h3>Informacion astronómica</h3>
                        <h4>Luna y fases de la luna</h4>
                        <p>Fase de la luna:{day.astro.moon_phase}</p>
                        <p>Puesta de luna:{day.astro.moonset}</p>
                        <p>Salida de la luna: {day.astro.moonrise}</p>
                        <br/>
                        <h4>Sol y luz</h4>
                        <p>Amanecer:{day.astro.sunrise}</p>
                        <p>Atardecer:{day.astro.sunset}</p>
                    </div>
                </div>
            ))
        : 
        <div>Buscando clima</div>}
            
        </div>
    )
}