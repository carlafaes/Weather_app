import Table from 'react-bootstrap/Table'

export default function InfoAstronomic({ weather }) {

    return (
        <div>
            <h4>Luna</h4>
            <Table responsive striped bordered hover variant="dark">
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