
export default function WeatherMainInfo({weather}){

    return(
        <>
        <div>{weather?.location.name}</div>
        <div>{weather?.location.country}</div>
        <div>
            <div>
                <img src={`http:${weather?.current.condition.icon}`} 
                     alt="imagen_icon" 
                     width="128"/>
            </div>
            <div>
                <div>{weather?.current.condition.text}</div>
                <div>{weather?.current.temp_c}º</div>
            </div>
        </div>
        {weather?.location.lat && weather?.location.lon ?
        <iframe 
        title="map"
        // src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635451.3589653765!2d${weather?.location.lon}8!3d${weather?.location.lat}4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2s!5e0!3m2!1ses-419!2sar!4v1656553751672!5m2!1ses-419!2sar`} 
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15057.534307180755!2d${weather.location.lon}5!3d${weather.location.lat}5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1651103744472!5m2!1sen!2smx`}
        width="600" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"></iframe> :
        <div>Buscando coordenadas</div>
        }

        {/* <iframe 
        title="map"
        className="iframe" 
        src={`https://maps.google.com/?ll=${weather?.location.lon},${weather?.location.lat}&z=20&t=m&output=embed`} 
        height="600" 
        width="600"
        frameBorder="0" 
        style={{border:0}} 
        allowFullScreen></iframe>
         */}
         </>
    )
}