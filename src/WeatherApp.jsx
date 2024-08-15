import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"wonderland",
        temperature:32.05,
        temp_max:32.05,
        temp_min:32.05,
        feels_like:39.05,
        humidity:74,
        weather:'haze',
    })
    let updateInfo=(result)=>{
        setWeatherInfo(result)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>weather app </h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}