import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default function WeatherMainInfo({ weather }) {

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Table responsive  hover striped >
                            <thead>
                                <tr>
                                    <th>Ciudad/Region</th>
                                    <th>Temperatura</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{weather?.location.name}, <br /> {weather?.location.region},<br />{weather?.location.country}</td>
                                    <td>{weather?.current.temp_c}º</td>

                                </tr>
                            </tbody>
                        </Table>
                        <Table  responsive  hover striped>
                            <thead>
                                <tr>
                                    <th>Sensacion Termica</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{weather?.current.feelslike_c}º</td>
                                    <td>
                                        <img src={`http:${weather?.current.condition.icon}`}
                                            alt="imagen_icon"
                                            width="128" />
                                        {weather?.current.condition.text}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <Table size='sm'  responsive hover striped >
                            <thead>
                                <tr>
                                    <th>Humedad</th>
                                    <th>Viento</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{weather?.current.humidity}%</td>
                                    <td>{weather?.current.wind_kph}km/h</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        {weather?.location.lat && weather?.location.lon ?
                            <iframe
                                title="map"
                                // src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635451.3589653765!2d${weather?.location.lon}8!3d${weather?.location.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2s!5e0!3m2!1ses-419!2sar!4v1656553751672!5m2!1ses-419!2sar`} 
                                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe> :
                            <div>Buscando coordenadas</div>}
                    </Col>
                </Row>
            </Container>
        </>
    )
}