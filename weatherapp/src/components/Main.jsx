import React, { useEffect, useState } from 'react'
import Crad from './Crad';
import axios from 'axios';
import { setFunction } from './icons';


function Main() {
    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Mumbai");
    const[icon,setIcon]=useState(null);
  

    useEffect(()=>{
      async function getData(){
        let api=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=866d112ff62ef24b5765a686e2ff9194`
   try{
    let response=await fetch(api);
    let data=await response.json();
    // console.log(result);
    setCity(data)
    if(data?.weather){
      setIcon(data?.weather[0].icon)

    }

   }catch(error){
    
    console.log(error.response.data.message)
    
   }
  }
  getData()
    },[search]);
    console.log(city)
    
  return (
    <div>
        <div className='search'>
            <input type='search' placeholder='Search City' onChange={(e)=> setSearch(e.target.value)} />
        </div>
        {
          city?.name?( <Crad search={search} city={city} url={setFunction(icon)}/>):<div><h1>City not found</h1></div>
          
        }
       
       
    </div>
  )
    }


export default Main