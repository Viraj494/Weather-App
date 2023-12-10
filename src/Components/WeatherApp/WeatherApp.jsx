import React, { useState } from 'react'
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import humidity from '../Assets/humidity.png';
import wind from '../Assets/wind.png';
import raining from '../Assets/raining.png';
import drizzle from '../Assets/drizzle.png';
import sun from '../Assets/sun.png';
import snow from '../Assets/snow.png';
import cloudy1 from '../Assets/cloudy (1).png';

export const WeatherApp = () => {

    let api_key = "34304e0b2091036cc7aa37af83486b99";
    const[wicon,setWicon] = useState(cloudy1);

    const search = async () => {
        const element = document.getElementsByClassName("CityInput");
        if(element[0].value === ""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + " °C";
        location[0].innerHTML = data.name;

        if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
        {
            setWicon(sun);
        }
        else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
        {
            setWicon(cloudy1);
        }
        else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
        {
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
        {
            setWicon(drizzle);
        }
        else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
        {
            setWicon(raining);
        }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
        {
            setWicon(raining);
        }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
        {
            setWicon(snow);
        }
        else{
            setWicon(sun);
        }


    }

  return (
    <div className='container'>
        <div className="top-bar">
            <input type="text" className="CityInput" placeholder='Search'/>
            <div className="search-icon" onClick={() => {search()}}>
                <img src={search_icon} className='searchimg' alt="serach" />
            </div>
        </div>
        <div className="weather-image">
            <img src={wicon} className='weatherimage' alt="" />
        </div>
        <div className="weather-temp">24°C</div>
        <div className="weather-location">London</div>
        <div className="data-container">
            <div className="element">
                <img src={humidity} alt="" className="icon" />
                <div className="data">
                    <div className="humidity-percent">64%</div>
                    <di className="text">Humidity</di>
                </div>
            </div>

            <div className="element">
                <img src={wind} alt="" className="icon" />
                <div className="data">
                    <div className="wind-rate">18 km/h</div>
                    <di className="text">Wind Speed</di>
                </div>
            </div>
        </div>
    </div>
  )
}

