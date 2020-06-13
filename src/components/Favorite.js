// ANCHOR using class
// import React, {Component} from "react";
// import {withToggler} from './HOCs/withToggler';

// class Favorite extends Component {
    // removed and replaced by with toggler
    // state = {
    //     isFavorited: false
    // }
    
    // toggleFavorite = () => {
    //     this.setState(prevState => {
    //         return {
    //             isFavorited: !prevState.isFavorited
    //         }
    //     })
    // }
    
//     render() {
//         return (
//             <div>
//                 <h3>Click heart to favorite</h3>
//                 <h1>
//                     <span 
//                         // onClick={this.toggleFavorite}
//                         onClick={this.props.toggle}
//                     >
//                         {/* {this.state.isFavorited ? "❤️" : "♡"} */}
//                         {this.props.on ? "❤️" : "♡"}
//                     </span>
//                 </h1>
//             </div>
//         ) 
//     }
// }

// ANCHOR using function
// import React from "react"
// import {withToggler} from "./HOCs/withToggler"

// function Favorite(props) {
//     return (
//         <div>
//             <h3>Click heart to favorite</h3>
//             <h1>
//                 <span 
//                     onClick={props.toggle}
//                 >
//                     {props.on ? "❤️" : "♡"}
//                 </span>
//             </h1>
//         </div>
//     ) 
// }

// const SuperchargeFavoriteComponent = withToggler(Favorite,{defaultOnValue: false});
// export default SuperchargeFavoriteComponent

// ANCHOR using render props
import React from "react"
import Toggler from "./Toggler"

function Favorite(props) {
    return (
        <Toggler  render={
            ({on, toggle}) => (                
                    <div>
                        <h3>Click heart to favorite</h3>
                        <h1>
                            <span 
                                onClick={toggle}
                            >
                                {on ? "❤️" : "♡"}
                            </span>
                        </h1>
                    </div>
            )
        }/>    
    ) 
}

export default Favorite