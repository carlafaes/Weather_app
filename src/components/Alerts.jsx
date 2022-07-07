import Table from 'react-bootstrap/Table'
import style from './styles/ClimaExtendido.module.css';

export default function Alerts({weather}){

    return(
        <div className={style.weather}>
            {weather? weather.alerts.alert.map((alert,index)=>(
                <div key={index}>
                   <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>Titular</th>
                            <th>Categoria</th>
                            <th>Evento</th>
                            <th>Descripcion</th>
                            <th>Gravedad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{alert.headline ? alert.headline : "No se registra"}</td>
                            <td>{alert.category ? alert.category : "No se registra"}</td>
                            <td>{alert.event ? alert.event : "No se registra"}</td>
                            <td>{alert.desc ? alert.desc : "No se registra"}</td>
                            <td>{alert.severity ? alert.severity : "No se registra"}</td>
                        </tr>
                    </tbody>
                   </Table>
                </div>
                
            ))
            :
            <div>
                <p>No se registran Alertas Metereologicas</p>
            </div>}
        </div>
    )
}