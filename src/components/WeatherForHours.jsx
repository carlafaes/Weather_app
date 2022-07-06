import { NavItem } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'

export default function WeatherForHours({weather}) {

return(
        <div>
            <h2>Pronostico por horas</h2>
            <Table responsive="sm" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Horas</th>
                        <th>Temperatura</th>
                    </tr>
                </thead>
            {weather ? weather.forecast.forecastday.map(function(hours,index){
                return(
                    <>
                        {hours.hour.map(function(hour,index){
                            return(
                                <tbody>
                                <tr>
                                    <td>{index +1}</td>
                                    <td>{hour.feelslike_c}</td>
                            
                                    <td>
                                        {hour.condition.text}
                                        <img src={`http:${hour.condition.icon}`} alt={hour.condition.text}/>
                                    </td>
                                    

                                    
                                </tr>
                                </tbody>
                            )
                        })}
                    </>
                )})
            :
            <div>Buscando pronostico</div>}
            </Table>
        </div>
    )
}
