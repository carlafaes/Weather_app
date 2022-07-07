import Card from 'react-bootstrap/Card';
import style from './styles/Footer.module.css';
import { BsFillSuitHeartFill } from 'react-icons/bs';


export default function Footer() {
    return(
        <Card className={style.container}>
        <Card.Header className={style.bordes}><br/></Card.Header>
        <Card.Body>
          <Card.Title className={style.letter}>Hecho con <BsFillSuitHeartFill/> en Argentina</Card.Title>
          <Card.Text className={style.letter}>
            Todos los derechos reservados © {new Date().getFullYear()}
          </Card.Text>
          
        </Card.Body>
      </Card>
    )
}