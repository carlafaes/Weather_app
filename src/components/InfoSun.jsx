import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';

export default function InfoSun({weather}){

    return(
        <div className={style.weather}>
            <h4 className={style.fuente}>Sol</h4>
            <Table responsive striped bordered hover >
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Amanecer</th>
                        <th>Atardecer</th>
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