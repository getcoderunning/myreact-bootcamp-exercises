// import React from 'react';
// import GrandChild from './GrandChild';

// function Child() {
//     return (
//         <>
//             <h1>I'm the Child component</h1>
//             <GrandChild />
//         </>
//     )
// }

// export default Child;

//ANCHOR Showing Tree rendering
import React, {Component} from "react"
import GrandChild from "./GrandChild"

class Child extends Component {
    render() {
        console.log("[ ]   [ ]   [🧒🏻]   [ ] rendered")
        return (
            <div>
                <p>I'm a Child Component</p>
                <GrandChild />
                <GrandChild />
            </div>
        )
    }
}

export default Child