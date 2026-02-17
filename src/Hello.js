import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function Hello() {
  function handleResponse(response) {
    alert(`The Weather in ${response.data.name} is ${response.data.main.temp}`);
  }

  let apiKey = "3a94f3778290bfeee61278505dbbe51d";
  let city = "London";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my React app.</p>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default Hello;
