import { useState } from "react";

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
            <input type="text"  onChange={handleChange}/>
        </form>
        </>
    )
}