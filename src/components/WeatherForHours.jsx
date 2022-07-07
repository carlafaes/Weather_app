import { NavItem } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'


export default function WeatherForHours({weather}) {

return(
        <div>
            <h2>Pronostico por horas</h2>
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Horas</th>
                        <th>Temperatura</th>
                        <th></th>
                        <th>Viento</th>
                        <th>Humedad</th>
                    </tr>
                </thead>
            {weather ? weather.forecast.forecastday.map(function(hours,index){
                return(
                    <>
                        {hours.hour.map(function(hour,index){
                            return(
                                <tbody key={index}>
                                <tr>
                                    <td>{(hour.time).slice(10)}</td>
                                    <td>{hour.feelslike_c}º</td>
                            
                                    <td>
                                        {hour.condition.text}
                                        <img src={`http:${hour.condition.icon}`} alt={hour.condition.text}/>
                                    </td>
                                    
                                    <td>{hour.wind_kph}km/h</td>

                                    <td>{hour.humidity}%</td>
                                </tr>
                                </tbody>
                            )
                        })}
                    </>
                )})
                :
                <tfoot>
                    <tr>Buscando pronostico</tr>
                </tfoot>
                }
                </Table>
        </div>
    )
}
