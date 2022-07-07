import { BsArrowDownSquareFill, BsArrowUpSquareFill} from 'react-icons/bs';
import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';

export default function ClimaExtendido({weather}){



    return(
        <div className={style.weather}>
            <h2 className={style.fuente}>Pronostico extendido</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Temperatura</th>
                        <th>Viento</th>
                        <th>Humedad</th>
                        <th>Precipitaciones</th>
                        <th></th>
                    </tr>
                </thead>
                {weather ? weather.forecast.forecastday.map((day,index)=>(
                    <>
                        <tbody>
                            <tr>
                                <td>{day.date}</td>
                                <td>
                                    <BsArrowDownSquareFill/>{day.day.mintemp_c}º
                                    {" "}
                                    <BsArrowUpSquareFill/>{day.day.maxtemp_c}º
                                </td>
                                <td>{day.day.maxwind_kph}km/h</td>
                                <td>{day.day.avghumidity}%</td>
                                <td>{day.day.totalprecip_mm}mm</td>
                                <td>
                                    <img src={`http:${day.day.condition.icon}`} alt={day.day.condition.text}/>
                                    {day.day.condition.text}
                                </td>
                            </tr>
                        </tbody>
                    </>
                ))
                :
                <tfoot>
                    <tr>
                        <td>
                            buscando informacion
                        </td>
                    </tr>
                </tfoot>
                }
            </Table>
        </div>
    )
}