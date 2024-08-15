import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const image_url="https://images.unsplash.com/photo-1570589867577-095368ee1649?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot_url="https://plus.unsplash.com/premium_photo-1681255760839-6581e2eb3e96?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const cold_url="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const rain_url="https://plus.unsplash.com/premium_photo-1664910358669-b19dce4be056?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let info={
    //     city:"delhi",
    //     temperature:32.05,
    //     temp_max:32.05,
    //     temp_min:32.05,
    //     feels_like:39.05,
    //     humidity:74,
    //     weather:'haze',




    // }
    return(
        <div className="InfoBox">
            {/* <h1>weather info</h1> */}
            <div className='cardcontainer'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? rain_url : info.temperature>20 ? hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temperature>20 ? <WbSunnyIcon /> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>temperature={info.temperature}&deg;C</p>
         <p>temp_max={info.temp_max}&deg;C</p>
         <p>temp_min={info.temp_min}&deg;C</p>
         
         <p>humidity={info.humidity}</p>
         <p>the weather can be describe as <i>{info.weather}</i> ans feels like {info.feels_like}&deg;C</p>
        
          
        </Typography>
      </CardContent>
     
    </Card>
    </div>
  
        </div>
    )
}