import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import clima from '../utils/clima.png'

export default function Navbar_() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#">
                        
                        <img
                            alt="clima_tch"
                            src={clima}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        CityWeather
                    </Navbar.Brand>
            </Navbar>
        </>
    )
}