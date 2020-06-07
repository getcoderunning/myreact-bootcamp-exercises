import React from 'react';
import './src/styles/style.scss';
import Child from './src/components/Child';

function App() {
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
    return (
        <>
            <Child />
        </>
    )
}

export default App