import React, {useState} from "react"
import  './WeatherApp.css'

import search_icon from "../Assets/search.png";
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";
import windicon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png"; 

const WeatherApp = () => {

    const API_KEY = {API_KEY};

    const [wicon, setWicon] = useState(clear_icon);

    const search = async () =>{
        const element =document.getElementsByClassName ("cityInput")
        if(element  [0].value === "")
        {
        return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=741eca894b264c9f05a6554cc3ee54c5`;
        let response = await fetch(url);
        let data = await response.json();
        const humidity =document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-rate");
        const temprature= document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity [0] .innerHTML = data.main.humidity + "%"; 
        wind [0].innerHTML = data.wind.speed + "km/hr";
        temprature [0].innerHTML = Math.floor(data.main.temp) + " °C";
        location [0].innerHTML = data.name;

        const icon_code = data.weather[0].icon;

        if(icon_code === "01d")
        {
            setWicon(clear_icon);
        }
        else if(icon_code === "01n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "02d")
        {
            setWicon(cloud_icon);
        }
        else if(icon_code === "02n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "03d")
        {
            setWicon(clear_icon);
        }
        else if(icon_code === "03n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "04d")
        {
            setWicon(clear_icon);
        }
        else if(icon_code === "05n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "09d")
        {
            setWicon(drizzle_icon);
        }
        else if(icon_code === "09n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "010d")
        {
            setWicon(rain_icon);
        }
        else if(icon_code === "010n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "011d")
        {
            setWicon(clear_icon);
        }
        else if(icon_code === "011n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "013d")
        {
            setWicon(snow_icon);
        }
        else if(icon_code === "013n")
        {
            setWicon(clear_icon);
        }

        else if(icon_code === "050d")
        {
            setWicon(clear_icon);
        }
        else if(icon_code === "050n")
        {
            setWicon(clear_icon);
        }
    }     

    
  return (
    <div className="body" >
        <div className='container'>
            <div className="top-bar" >
                <input type="text" className="cityInput" placeholder="Search Place"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={wicon} alt="" />
            </div>

            <div className="weather-temp">20 °C</div>
            <div className="weather-location">Delhi</div>
            <div className="data-container">
                <div className="element">
                    <img src="" alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>

                <div className="element">
                    <img src="" alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">64%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default WeatherApp
