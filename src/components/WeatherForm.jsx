import { useState } from "react";
import style from './styles/WeatherForm.module.css'
import { BiSearchAlt } from 'react-icons/bi';

export default function WeatherForm({onChangeCity}){
    const [city,setCity] = useState('');

    const handleChange = (e) => {
        const value=e.target.value;

        if(value.length>0){
            setCity(value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            {/* <label className={style.label}>Buscar Ciudad</label> */}
            <input
            className={style.input_sub} 
            type="text" 
            placeholder="por ejemplo:Buenos Aires" 
            onChange={handleChange}/>
            <button className={style.btn_sub}>
                <BiSearchAlt/>Buscar
            </button>
        </form>
        </>
    )
}