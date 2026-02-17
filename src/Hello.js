import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

function Hello() {
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
