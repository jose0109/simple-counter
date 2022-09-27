//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application

let seconds = 0;

setInterval(() => {
    ReactDOM.render(<SecondsCounter seconds={seconds} />, document.querySelector("#app"));    
    seconds += 1;
}, 1000);

