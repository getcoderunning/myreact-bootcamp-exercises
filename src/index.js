// import React from "react";
// import ReactDOM from "react-dom";

// import App from "../App";

// ReactDOM.render(<App />, document.getElementById("root"))
document.getElementById("button").addEventListener("click", function(event) {
    console.log(event)
})

document.getElementById("input").addEventListener("input", function() {
    console.log("Input changed!")
})

document.getElementById("box").addEventListener("mouseover", function() {
    console.log("Hovered in box!")
})
