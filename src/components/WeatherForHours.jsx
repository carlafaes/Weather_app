import { NavItem } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';

export default function WeatherForHours({weather}) {

return(
        <div className={style.weather}>
            <h2 className={style.fuente}>Pronostico por horas</h2>
            <Table responsive striped bordered hover >
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
                    <tr>
                        <td>Buscando pronostico</td>
                    </tr>
                </tfoot>
                }
                </Table>
        </div>
    )
}
