
import React ,{ useState } from 'react';

export default function City(){

    return (
        <React.Fragment>
            <SearchInput></SearchInput>
        </React.Fragment>
    )

    function DisplayWeather(weather){
            if(weather.weather){
                return (
                    <React.Fragment>
                        <div>
                            <p>Température = {weather.weather.current.temp_c} °C</p>
                            <p>Météo = {weather.weather.current.condition.text}</p>
                            <button onClick={function() {window.location.href = `/music?code=${weather.weather.current.condition.code}`;}} type="submit">Essayer</button>
                        </div>
                    </React.Fragment>
                )
            }
            return (<React.Fragment></React.Fragment>)
    }
      
    function GetWeather(location, setWeather){
    
        var url = `http://api.weatherapi.com/v1/current.json?lang=fr&key=1c99bc724314407aab180609212105&q=${location}`;
            fetch(url).then((response) => response.json())
            .then((json) => {
                return setWeather(json);
            })
            .catch((error) => {
                console.error(error);
            })
    }
      
    function SearchInput(){
        let [location, setLocation] = useState();
        let [weather, setWeather] = useState();
        return(
            <>
            <div>Search a city</div>
            <input onChange={event => {setLocation(event.target.value)}}/> 
            <button onClick={() => GetWeather(location, setWeather)}>Search</button>
            <DisplayWeather weather={weather}></DisplayWeather>
            </>
        )
    }
}

