// import React from 'react';

// function GrandChild() {
//     return (
//         <>
//             <hr />
//             <h3>I'm the GrandChild component</h3>
//             <p>I'm also a part of the GrandChild component</p>
//         </>
//     )
// }

// export default GrandChild;

//ANCHOR Showing Tree rendering
import React, {Component} from "react"

class GrandChild extends Component {
    render() {
        console.log("[ ]   [ ]   [ ]   [👶🏻] rendered")
        return (
            <div>
                <p>I'm a GrandChild Component</p>
            </div>
        )
    }
}

export default GrandChild