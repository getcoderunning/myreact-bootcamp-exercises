import React from 'react';
//ANCHOR implementing defaultProps in functions
// function Card(props) {
//     const styles = {
//         backgroundColor: props.cardColor,
//         height: props.height,
//         width: props.width
//     }

//     return (
//         <div style={styles}></div>
//     )
// }


// Card.defaultProps = {
//     cardColor: "blue",
//     height: 100,
//     width: 100
// }

//ANCHOR implementing defaultProps in class
//configure "plugins": ["@babel/plugin-proposal-class-properties"] in babel config file for defaultProps to work
// class Card extends React.Component {
//     static defaultProps = {
//         cardColor: "blue",
//         height: 100,
//         width: 100
//     }

//     render() {
//         const styles = {
//             backgroundColor: props.cardColor,
//             height: props.height,
//             width: props.width
//         }

//         return (
//             <div style={styles}></div>
//         )
//     }
// }

//ANCHOR implementing Prop Types
//install prop-types in node
//npm i prop-types
import PropTypes from 'prop-types';

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: props.height,
        width: props.width
    }

    return (
        <div style={styles}></div>
    )
}

Card.propTypes = {
    //cardColor: PropTypes.string.isRequired,
    cardColor: PropTypes.oneOf(["red", "blue"]).isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

Card.defaultProps = {
    height: 100,
    width: 100
}

export default Card;