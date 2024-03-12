import React, { useState } from 'react'
import './Country.css'

export default function Country({country,handleVisitedCountry,handleVisitedFlags}) {
    const {name,area,flags,population} = country;
    const [visited,setVisited] = useState(false)
   const HandleVisited = () => {
    setVisited(!visited)
   }
 
    return (
    <div className={`box ${visited ? 'visited' : 'non-visited'}`}>
      <h3 style={{color: visited ? 'purple': 'white'}}> {name.common}  </h3>
 
      <img src={flags.png} alt="" />
      <h4>area: {area} </h4>
      <h5>population: {population}</h5>
    <div>
    <button onClick={()=>handleVisitedCountry(country)}>Mark visited</button>
    <br />
    <button onClick={()=>handleVisitedFlags(country.flags.png)}>Flags</button>
    <br />
    <button onClick={HandleVisited}>{visited ? 'visited': 'Going'}</button>
    {visited ?  'I have visited this country':'I want to visted'}
    </div>
    </div>
  )
}
