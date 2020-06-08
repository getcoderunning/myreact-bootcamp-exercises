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
class Card extends React.Component {
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }

    render() {
        const styles = {
            backgroundColor: props.cardColor,
            height: props.height,
            width: props.width
        }

        return (
            <div style={styles}></div>
        )
    }
}

export default Card;