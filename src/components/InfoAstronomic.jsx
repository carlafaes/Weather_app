import Table from 'react-bootstrap/Table'

export default function InfoAstronomic({weather}){

    return(
        <div>
            {weather ? 
            weather.forecast.forecastday.map((day,index)=>(
                <div key={index}>
                        <h3>Informacion astronómica</h3>
                        <h4>{day.date}</h4>
                        <h4>Luna y fases de la luna</h4>
                        <p>Fase de la luna:{day.astro.moon_phase}</p>
                        <p>Puesta de luna:{day.astro.moonset}</p>
                        <p>Salida de la luna: {day.astro.moonrise}</p>
                        <br/>
                        <h4>Sol y luz</h4>
                        <p>Amanecer:{day.astro.sunrise}</p>
                        <p>Atardecer:{day.astro.sunset}</p>
                    </div>
            ))
            :
            <div>Buscando informacion</div>}
        </div>
    )
}