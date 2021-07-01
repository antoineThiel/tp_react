import React from 'react';

export default function HomePage(){
    return(
        <React.Fragment>
            <p>Bienvenue sur mon site !</p>
            <p>Vous pouvez rechercher une ville et obtenir la météo ainsi qu'une musique liée à la météo</p>
            <p>Les Api exploitées sont <a href="https://www.weatherapi.com/docs/" target="_blank" rel="noreferrer">"WeatherApi"</a>  
            et <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noreferrer">"Youtube"</a></p>
            <button onClick={function() {window.location.href = "/city";}} type="submit">Essayer</button>
        </React.Fragment>
    )
}