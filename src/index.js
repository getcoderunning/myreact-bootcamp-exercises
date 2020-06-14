import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

const ThemeContext = React.createContext();
//ThemeContext.Provider and ThemeContext.Consumer

ReactDOM.render(
        <ThemeContext.Provider value={"light"}>
            <App />
        </ThemeContext.Provider>, 
        document.getElementById("root")
    )