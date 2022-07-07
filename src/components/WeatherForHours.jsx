import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';
import { MdOutlineAccessTime } from 'react-icons/md';
import { TbTemperaturePlus,TbWind } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';

export default function WeatherForHours({weather}) {

return(
        <div className={style.weather}>
            <h2 className={style.fuente}>Pronostico por horas</h2>
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th><MdOutlineAccessTime/>Horas</th>
                        <th><TbTemperaturePlus/>Temperatura</th>
                        <th></th>
                        <th><TbWind/>Viento</th>
                        <th><WiHumidity/>Humedad</th>
                    </tr>
                </thead>
            {weather ? weather.forecast.forecastday.map(function(hours,index){
                return(
                    <>
                        {hours.hour.map(function(hour,index){
                            return(
                                <tbody key={index}>
                                <tr>
                                    <td>{(hour.time).slice(10)} hs</td>
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
