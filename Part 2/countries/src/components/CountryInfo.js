import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryInfo = (props) => {
    const languages = props.country.languages.map((language) => <li key={language.name}> {language.name} </li>);
    const country = props.country.name;
    const imgURL = props.country.flag;

    const api_key = process.env.REACT_APP_API_KEY;
    const weatherURL = `http://api.weatherstack.com/current?access_key=${api_key}&query=${props.country.capital.toLowerCase()}`;
    const [weather, setWeather] = useState({});

    useEffect(() => {

        const eventHandler = (response) => {
            const temp = response.data.current.temperature;
            const wind = response.data.current.wind_speed;
            const dir = response.data.current.wind_dir;
            const icon = response.data.current.weather_icons[0];
            const weatherObj = {temp: temp, wind: wind, dir: dir, icon: icon};
            setWeather(weatherObj);
        }

        const promise = axios.get(weatherURL);
        promise.then(eventHandler);

    }, []);

    return (
        <div>
            <h1>{country}</h1>
            <p>Capital: {props.country.capital}</p>
            <p>Population: {props.country.population}</p>
            <h2>Languages</h2>
            <ul>
                {languages}
            </ul>
            <img src={imgURL} alt="flag" width="300" />
            <h1>Weather in {props.country.capital}</h1>
            <p><strong>temperature:</strong> {weather.temp} Celcius</p>
            <img src={weather.icon} alt="weather" />
            <p><strong>wind:</strong> {weather.wind} mph</p>
            <p><strong>direction:</strong> {weather.dir}</p>
        </div>
    );
}

export default CountryInfo;