import { BsArrowDownSquareFill, BsArrowUpSquareFill,BsCalendar3,BsCloudRain} from 'react-icons/bs';
import { MdOutlineAccessTime } from 'react-icons/md';
import { TbTemperaturePlus,TbWind } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { BiArrowToBottom,BiArrowToTop } from 'react-icons/bi';
import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';

export default function ClimaExtendido({weather}){



    return(
        <div className={style.weather}>
            <h2 className={style.fuente}>Pronostico extendido</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th><BsCalendar3/>Fecha</th>
                        <th><TbTemperaturePlus/>Temperatura</th>
                        <th><TbWind/> Viento</th>
                        <th><WiHumidity/> Humedad</th>
                        <th><BsCloudRain/>Precipitaciones</th>
                        <th></th>
                    </tr>
                </thead>
                {weather ? weather.forecast.forecastday.map((day,index)=>(
                    <>
                        <tbody>
                            <tr>
                                <td>{day.date}</td>
                                <td>
                                    <BiArrowToBottom/>{day.day.mintemp_c}º
                                    {" "}
                                    <BiArrowToTop/>{day.day.maxtemp_c}º
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