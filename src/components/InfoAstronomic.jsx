import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';

export default function InfoAstronomic({ weather }) {

    return (
        <div className={style.weather}>
            <h4 className={style.fuente}>Luna</h4>
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Fase de la Luna</th>
                        <th>Puesta de Luna</th>
                        <th>Salida de la Luna</th>
                        <th>Iluminacion lunar</th>
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