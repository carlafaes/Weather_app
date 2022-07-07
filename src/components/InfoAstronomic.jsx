import Table from 'react-bootstrap/Table'
import { BsCloudMoon,BsCalendar3,BsMoonStars } from 'react-icons/bs';
import { WiMoonAltWaxingCrescent5,WiMoonAltFull } from 'react-icons/wi';
import { RiMoonClearLine } from 'react-icons/ri';
import style from './styles/ClimaExtendido.module.css';

export default function InfoAstronomic({ weather }) {

    return (
        <div className={style.weather}>
            <h4 className={style.fuente}><RiMoonClearLine/>Luna</h4>
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th><BsCalendar3/>Fecha</th>
                        <th><WiMoonAltWaxingCrescent5/>Fase de la Luna</th>
                        <th><BsCloudMoon/>Puesta de Luna</th>
                        <th><BsMoonStars/>Salida de la Luna</th>
                        <th><WiMoonAltFull/>Iluminacion lunar</th>
                    </tr>
                </thead>
                {weather ? weather.forecast.forecastday.map((day,index)=>(
                    <>
                        <tbody>
                                <tr>
                                    <td>{day.date}</td>
                                    <td>{day.astro.moon_phase}</td>
                                    <td>{day.astro.moonset}</td>
                                    <td>{day.astro.moonrise}</td>
                                    <td>{day.astro.moon_illumination}%</td>
                                </tr>
                            </tbody>
                    </>
                ))
                :
                <tfoot>
                    <tr>
                        <td>Buscando informacion</td>
                    </tr>
                </tfoot>
                }
            </Table>
        </div>
    )
}