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

//ANCHOR Using Children
import React from 'react';
import './src/styles/style.scss';
// import EmailCallout from './src/components/EmailCallout';
// import ImageCallout from './src/components/ImageCallout';
// import InfoCallout from './src/components/InfoCallout';
import Callout from './src/components/Callout';

function App() {
    return (
        <main>
            <h1>Welcome!</h1>
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

            {/* ANCHOR using children */}
<           Callout>
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
        </main>
    )
}

export default App