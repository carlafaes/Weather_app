

export default function WeatherForHours({weather}) {
let horas=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];


return(
        <div>
            <h2>Pronostico por horas</h2>
            {weather ? weather.forecast.forecastday.map(function(hours,index){
                return(
                    <div key={index}>
                        <div>{hours.hour.map(function(item,index){
                            return(
                                <div key={index}>
                                    <table>
                                        <thead>
                                            {index +1 }
                                        </thead>
                                        <tr>
                                            <td>{item.feelslike_c}</td>
                                        </tr>  
                                        <tr>
                                            <td>{item.condition.text}</td>
                                            <td>
                                            <img src={`http:${item.condition.icon}`} alt={item.condition.text}/>
                                            </td>
                                        </tr>
                                    </table>
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
