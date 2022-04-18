import React, { useState } from "react";
import "./App.css";
import Weather from "./Weather";
// import axios from "axios";
const App = () => {
  // const weatherApp = {
  //   id: "38e1eb05f3fe67881c3c7ec6be40807f",
  // };

  const weekDays = [
    "Monday",
    "Teusday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const monthNow = months[date.getMonth()];
  const dayNow = weekDays[date.getDay()];
  const year = date.getFullYear();

  const [weather, setWeather] = useState({});

  const submitNowChangeHandler = (enteredData) => {
    // if (e.keys === "enter")
    //   const response = await axios
    //     .get("https://api.openweathermap.org/data/2.5/weather", {
    //       params: { query: enteredData },
    //       headers: {
    //         Authorization: "Client-ID 38e1eb05f3fe67881c3c7ec6be40807f",
    //       },
    //     })
    //     // .then((res) => res.json())
    //     .then((res) => console.log(res));
    //   console.log(response);

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${enteredData}&units=metric&appid=38e1eb05f3fe67881c3c7ec6be40807f`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setWeather(response);
      });
  };

  // const { temp_max } = weather.main;

  return (
    <div className="App">
      <Weather onSubmitNow={submitNowChangeHandler}></Weather>
      <div className="div-container">
        {weather.sys ? (
          <div className=" div-container-child">
            The weather Today {dayNow}, {monthNow}, {year}{" "}
          </div>
        ) : (
          <div className=" div-container-child">The weather Today</div>
        )}

        {weather.sys ? (
          <div className=" div-container-child">
            Place: {weather.name}, {weather.sys.country}
          </div>
        ) : (
          ""
        )}
        {weather.main ? (
          <div className=" div-container-child">
            Temperature: {Math.round(weather.main.temp)}
          </div>
        ) : (
          ""
        )}
        {weather.main ? (
          <div className=" div-container-child">
            Humidity: {weather.main.humidity}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
