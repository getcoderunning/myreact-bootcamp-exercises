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

//ANCHOR Using Default Props and propTypes Practice
import React from 'react';
import RoundImg from './src/components/RoundedImg'

function App() {
    return (
        <div>
            <RoundImg src="https://picsum.photos/id/237/300/300" borderRadius={50} />
        </div>
    )
}
// 
export default App