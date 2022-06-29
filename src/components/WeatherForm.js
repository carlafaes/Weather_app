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
        console.log(city);
        onChangeCity(city);
    }
    return(
        <>
        <form>
            <input type="text" value={city} onChange={handleChange}/>
        </form>
        </>
    )
}