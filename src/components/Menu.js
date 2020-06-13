// ANCHOR using class
// import React, {Component} from "react";
// import {withToggler} from './HOCs/withToggler';
// class Menu extends Component {
    // removed and replaced by withToggler
    // state = {
    //     show: true
    // }
    
    // toggleShow = () => {
    //     this.setState(prevState => {
    //         return {
    //             show: !prevState.show
    //         }
    //     })
    // }
    
//     render() {
//         return (
//             <div>
//                 {/* <button onClick={this.toggleShow}>{this.state.show ? "Hide" : "Show"} Menu </button> */}
//                 <button onClick={this.props.toggle}>{this.props.on ? "Hide" : "Show"} Menu </button>
//                 {/* <nav style={{display: this.state.show ? "block" : "none"}}> */}
//                 <nav style={{display: this.props.on ? "block" : "none"}}>
//                     <h6>Signed in as Coder123</h6>
//                     <a>Your Profile</a>
//                     <a>Your Repositories</a>
//                     <a>Your Stars</a>
//                     <a>Your Gists</a>
//                 </nav>
//             </div>
//         ) 
//     }
// }

// ANCHOR using function
// import React from "react";
// import {withToggler} from './HOCs/withToggler';

// function Menu(props) {
//     return (
//         <div>
//             <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
//             <nav style={{display: props.on ? "block" : "none"}}>
//                 <h6>Signed in as Coder123</h6>
//                 <a>Your Profile</a>
//                 <a>Your Repositories</a>
//                 <a>Your Stars</a>
//                 <a>Your Gists</a>
//             </nav>
//         </div>
//     ) 
// }

// const SuperchargedMenuComponent = withToggler(Menu, {defaultOnValue: true});
// export default SuperchargedMenuComponent

// ANCHOR using render props
import React from "react";
import Toggler from './Toggler';

function Menu(props) {
    // return (
    //     <Toggler defaultOnValue={true} render={
    //         ({on, toggle}) => (
    //             <div>
    //             <button onClick={toggle}>{on ? "Hide" : "Show"} Menu </button>
    //                 <nav style={{display: on ? "block" : "none"}}>
    //                     <h6>Signed in as Coder123</h6>
    //                     <a>Your Profile</a>
    //                     <a>Your Repositories</a>
    //                     <a>Your Stars</a>
    //                     <a>Your Gists</a>
    //                 </nav>
    //             </div>
    //         )

    //     } />
    // ) 

    //another approach of rendering from app.js
    return (
       <div>
            <button onClick={props.toggle}>{props.on ? "Hide" : "Show"} Menu </button>
            <nav style={{display: props.on ? "block" : "none"}}>
                    <h6>Signed in as Coder123</h6>
                    <a>Your Profile</a>
                    <a>Your Repositories</a>
                    <a>Your Stars</a>
                    <a>Your Gists</a>
            </nav>
        </div>

    ) 




}

export default Menu