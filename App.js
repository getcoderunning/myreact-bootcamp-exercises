//ANCHOR Using React Fragment
// import React from 'react';
// import './src/styles/style.scss';
// import Child from './src/components/Child';

// function App() {
    //old approach
    // return (
    //     <div>
    //         <Child />
    //     </div>
    // )

    //using React.Fragment
    // return (
    //     <React.Fragment>
    //         <Child />
    //     </React.Fragment>
    // )

    //using React.Fragment shorthand notation
    //using React.Fragment have effects on CSS, CSS may not find tags or components in your app
    //using React.Fragment simplifies the DOM tree and nested tags in your html
    // return (
    //     <>
    //         <Child />
    //     </>
    // )
// }
// ****************************************************************
//ANCHOR Using Default Props
// import React from 'react';
// import Card from  './src/components/Card';

// function App() {
//     return (
//         <div>
//             <Card cardColor="red" height={50} width={50} />
//             <Card />
//             <Card cardColor="blue" height={150} width={150}/>
//         </div>
//     )
// }
// ****************************************************************
//ANCHOR Using Default Props and propTypes Practice
// import React from 'react';
// import RoundImg from './src/components/RoundedImg'

// function App() {
//     return (
//         <div>
//             <RoundImg src="https://picsum.photos/id/237/300/300" borderRadius={50} />
//         </div>
//     )
// }
// 
// ****************************************************************
//ANCHOR Using Children
// import React from 'react';
// import './src/styles/style.scss';
// import EmailCallout from './src/components/EmailCallout';
// import ImageCallout from './src/components/ImageCallout';
// import InfoCallout from './src/components/InfoCallout';
// import Callout from './src/components/Callout';

// function App() {
//     return (
//         <main>
//             <h1>Welcome!</h1>
            {/* ANCHOR code NOT using children
            <InfoCallout 
                header="Don't miss out!"
                body="Unless you don't suffer from FOMO, you better make sure you fill out the email form below!" 
            />
            
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            
            <ImageCallout 
                img={"https://picsum.photos/id/102/4320/3240"} 
                caption="Just look at those sparkling raspberries!"
            />
            
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            
            <EmailCallout 
                header="Give us your email. We definitely won't sell it to anyone." 
                btnText="Sign me up!" 
            />
             */}
// ****************************************************************
{/* ANCHOR using children */}
{/* <           Callout>
                <h2>Don't miss out!</h2>
                <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
            </Callout>
            
            <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
            
            <Callout>
                <img src="https://picsum.photos/id/102/4320/3240" width="100%" />
                <figcaption>Just look at those sparkling raspberries!</figcaption>
            </Callout>
            
            <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
            
            <Callout>
                <h2>Give us your email. We definitely won't sell it to anyone.</h2>
                <input type="email" placeholder="Enter Email"/>
                <button>Sign me up!</button>
            </Callout>
        </main> */}
//     )
// }
// ****************************************************************
// ANCHOR Implementing Higher-Order Components example 1
// Higher-Ored Components - A function that takes a component as its first argument 
// and returns a new component that wraps the given component, 
// providing extra capabilities to it.
// import React from 'react';
// import {withPointlessHOC} from './src/components/withPointlessHOC';
// import {withExtraPropAdded} from './src/components/withExtraPropAdded';

// function App(props) {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello World!</h1>

//         </div>
//     )
// }

// const PointlessHOC = withExtraPropAdded(App);
// const PointlessHOCc = withPointlessHOC(App);
// export default PointlessHOC
//export default App
// ****************************************************************
// ANCHOR Implementing Higher-Order Components example 2
// import React from 'react';
// import {withFavoriteNumber} from './src/components/withFavoriteNumber';

// function App(props) {
//     return (
//         <div>
//             <h1>{props.favoriteNumber}</h1>
//         </div>
//     )
// }

// export default withFavoriteNumber(App)
// ****************************************************************
// ANCHOR Implementing Higher-Order Components example 3
// import React from 'react';
// import Favorite from './src/components/Favorite';
// import Menu from './src/components/Menu';

// function App() {
//     return (
//         <div>
//             <Menu />
//             <hr />
//             <Favorite />
//         </div>
//     )
// }

// export default App
// ****************************************************************
// ANCHOR Implementing Render props example 1
// import React from 'react';
// import Example from './src/components/Example';

// function App() {
//     return (
//         <div>
            {/* <Example name={"Xtian"}/> */}
            {/* <Example name={function(){return "Hey there!"}} /> */}
            {/* <Example name={function(){return <h1>Hey there!</h1>}} /> */}

            {/* Rendering a boolean */}
            {/* <Example render={
                        function(isDayTime) {
                            return (
                            <h1>{isDayTime ? "Good Day" : "Good Evening"}, Xtian!</h1>
                            )
                        }
            }/> */}

            {/* Rendering a number */}
            {/* <Example render={
                        function(number) {
                            return (
                                <h1>{number >= 0 ? "Positive" : "Negative"} Number</h1>
                            )
                        }
            }/> */}

            {/* another example */}
            {/* <Example render={
                function(bool, number) {
                    return (
                        <div>
                                <h1>{number}</h1>
                                <h1>{bool ? "true" : "false"}</h1>
                        </div>
                    )
                }
            }/>
        </div>
    )
}

export default App */}
// ****************************************************************
// ANCHOR Implementing Render props example 2
    import React from "react";
    import Menu from "./src/components/Menu";
    import Favorite from "./src/components/Favorite";
    import Toggler from './src/components/Toggler';

    // function App() {
    //     return (
    //         <div>
    //             <Menu />
    //             <hr />
    //             <Favorite />
    //         </div>
    //     )
    // }

    //another approach to render toggler
    function App() {
        return (
            <div>
                <Toggler defaultOnValue={true} render={({on, toggle}) => {
                    return (
                        <Menu on={on} toggle={toggle} />
                    )
                }} />
                <hr />
                <Favorite />
            </div>
        )
    }

    export default App