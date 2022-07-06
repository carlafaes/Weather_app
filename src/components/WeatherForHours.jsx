export default function WeatherForHours({weather}) {


    return(
        <div>
            <h2>Pronostico por horas</h2>
            {weather ? weather.forecast.forecastday.map(function(hours,index){
                return(
                    <div key={index}>
                        <div>{hours.hour.map(function(item,index){
                            return(
                                <div key={index}>
                                    <p>{item.feelslike_c}</p>
                                    
                                </div>
                            )
                        }
                        )}</div>
                    </div>
                )
            })
        :
        <div>Buscando clima</div>}
        </div>
    )
}