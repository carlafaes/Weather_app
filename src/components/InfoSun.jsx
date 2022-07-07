import Table from 'react-bootstrap/Table'
import { BsSun,BsSunrise,BsSunset,BsCalendar3 } from 'react-icons/bs';
import style from './styles/ClimaExtendido.module.css';

export default function InfoSun({weather}){

    return(
        <div className={style.weather}>
            <h4 className={style.fuente}><BsSun/>Sol</h4>
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th><BsCalendar3/>Fecha</th>
                        <th><BsSunrise/> Amanecer</th>
                        <th><BsSunset/>Atardecer</th>
                    </tr>
                </thead>
                {weather ? weather.forecast.forecastday.map((day,index)=>(
                    <>
                        <tbody>
                            <tr>
                                <td>{day.date}</td>
                                <td>{day.astro.sunrise}</td>
                                <td>{day.astro.sunset}</td>
                            </tr>
                        </tbody>
                    </>
                ))
                :
                <tfoot>
                    <tr>
                        <td>Buscando informacion</td>
                    </tr>
                </tfoot>}
            </Table>
        </div>
    )
}