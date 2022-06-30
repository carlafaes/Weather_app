
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
        <iframe 
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23865.664303540627!2d-65.3634869!3d-41.608012800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1656553199970!5m2!1ses-419!2sar" 
        width="600" 
        height="450" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}