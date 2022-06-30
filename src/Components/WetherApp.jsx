
// import './App.css';
import { useEffect, useState } from 'react'
import '../Components/new.css'

function WetherApp() {
    const[data,setdata]= useState({})
    const[city,setCity]= useState("Karachi")
    const[input,setinput] = useState("")
    useEffect(()=>{
         fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bfd89c2a14fbbdad794eefbab688cd60`)
        .then((res)=>res.json())
        .then((result)=>{
            setdata(result)
            // console.log(result)
        })
        .catch((error)=>{
            console.log('err',error)
        })
    },[input])
    const clicked = ()=>{
        setinput("")
       setCity(input)
      
    }
  return (
   
    <div className="App">
   <div className='pmain'>
  <div className='cmain'>
   <input type="text" placeholder='Search any city'
   value={input}
   onChange={(e)=>setinput(e.target.value)}/>
  <button className='btn' onClick={clicked}> <i className="fa-solid fa-magnifying-glass ico"></i></button>
  <h3 className='cityname'><i class="fa-solid fa-location-dot"></i> {data && data.name}</h3>
  <h2 className='temp'><i class="fa-solid fa-cloud"></i> {data && data.main && data.main.temp}°C</h2>
  <p className='feel'>Feels like {data && data.main && data.main.feels_like}</p>
  <div className="uls">
  <ul>
    <li>Min_temp : {data && data.main && data.main.temp_max}°C</li>
    <li>Max_temp : {data && data.main && data.main.temp_min}°C</li>
    <li>Humidity : {data && data.main && data.main.humidity}%</li>
    <li>Condition : {data && data.weather && data.weather[0] && data.weather[0].description }</li>
    <li>Pressure : {data && data.main && data.main.pressure}</li>
    <li>Wind-speed : {data && data.wind && data.wind.speed}</li>
   
  </ul>
  </div>

  </div>
   </div>

    </div>
  );
}

export default WetherApp;
