import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    // console.log('add this to your visited country')
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
    // console.log(flag)
    // console.log('flag adding')
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h2>All Country : {countries.length} </h2>
      <div>
        <h4>Visited Countries : {visitedCountries.length} </h4>

        <ul>
          {visitedCountries.map((country, e) => (
            <li key={e}>{country.name.common} </li>
          ))}
        </ul>
        <div>
          {visitedFlags.map((flag, e) => (
            <img src={flag} key={e}></img>
          ))}
        </div>
      </div>
      <div className="country-container">
        {countries.map((country, i) => (
          <Country
            country={country}
            key={i}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
}
