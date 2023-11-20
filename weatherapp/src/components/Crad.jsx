
import React from 'react'

function Crad({city, search,url}) {
  return (
    <div className='card'>
    <div className='card-body'>
    <header>
            <h1>{search}</h1>
    </header>
    <div className='sub-block'>
      <div>
        <img src={url} alt=" " width={200} height={200}/>
      </div>
        
        {/*For temperature*/}
      <div>
        {/* <h2>28<sup>o</sup>C</h2> */}
        <h2> {city?.main.temp + '\xB0'}C</h2>
        <p>(Feels like {city?.main.feels_like+'\xB0'} C )</p>
        <h3>{city?.weather[0].main}</h3>
        <div className='sub'>
          <span> Max Temp : {city?.main.temp_max+'\xB0'} C </span>
          <span> Mix Temp : {city?.main.temp_min+'\xB0'} C </span>
          <p>Humidity : {city?.main.humidity}</p>
        </div>
     </div>
       
    </div>
    </div>
</div>
  )
}

export default Crad