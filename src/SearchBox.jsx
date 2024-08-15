import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const [city,setCity]=useState();
    let[error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="e3c6c1c74a89ad91f09b9d104f4e6857"
    let handleChange=(e)=>{
        setCity(e.target.value)
    }
    let getWeatherInfo= async()=>{
       try{
        const response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const responseJson=await response.json();
        // console.log(responseJson)
        let result={
            city:city,
            temperature:responseJson.main.temp,
            temp_max:responseJson.main.temp_max,
            temp_min:responseJson.main.temp_min,
            humidity:responseJson.main.humidity,
            feels_like:responseJson.main.feels_like,
            weather:responseJson.weather[0].description,
        }
        //  console.log(result)
         return result;
       } catch(err){
        throw err;
       }

    }
    let handleSubmit= async (e)=>{
        try{
            e.preventDefault();
        // console.log(city);
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo)
        } catch(err){
            setError(true)
        }
        
    }
    return(
        <div className="SearchBox">
            {/* <h1>search weather</h1> */}
            <form action="" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="city" variant="outlined" onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained" type='submit'>search</Button>
            {error && <p style={{color:"red"}}>no such place exist</p>}
            </form>
        </div>
    )
}