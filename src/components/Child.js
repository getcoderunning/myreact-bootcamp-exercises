import React from "react";
import GrandChild from "./GrandChild";

export default React.memo(function Child() {   
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return (
            <div>
                <p>I'm a Child Component</p>
                <GrandChild />
                <GrandChild />
            </div>
        )    
    }
)
