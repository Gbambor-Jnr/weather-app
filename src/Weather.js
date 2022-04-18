import React, { useState } from "react";
import "./Weather.css";

const Weather = (props) => {
  const [entered, setEntered] = useState("");

  const inputChangeHandler = (e) => {
    setEntered(e.target.value);
  };

  const submitChangeHandler = (e) => {
    e.preventDefault();
    props.onSubmitNow(entered);
    setEntered("");
  };
  return (
    <div className="container">
      <form onSubmit={submitChangeHandler}>
        <input
          type="text"
          value={entered}
          onChange={inputChangeHandler}
          placeholder="Enter Location"
        />
      </form>
    </div>
  );
};

export default Weather;
