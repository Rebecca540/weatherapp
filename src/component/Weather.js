import React, { useState } from "react";
import axios from "axios";
import config from "../config";

const BASE = config.base;
const KEY = config.Key;

function Weather() {
  const [weather, setWeather] = useState(null);

  const [country, setCountry] = useState("");

  const [city, setCity] = useState("");

  //#region

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  //#endregion
  const search = (e) => {
    e.preventDefault();
    if (country && city) {
      axios
        .get(`${BASE}?access_key=${KEY}&query=${country},${city}`)
        .then((result) => {
          // setQuery("");
          setCountry("");
          setCity("");
          setWeather({ ...result.data });
          console.log(result.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div>
      {!weather ? (
        <div>
          <input onChange={handleCountry} value={country} />
          <input onChange={handleCity} value={city} />
          <button onClick={search}>search</button>
        </div>
      ) : (
        <h1>{`${weather.location.country},${weather.location.name}`}</h1>
      )}
    </div>
  );
}
export default Weather;
