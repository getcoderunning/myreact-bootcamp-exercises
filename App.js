// import React, {useState} from 'react';

// ANCHOR Using class for state
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       answer: 'Yes',
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     );
//   }
// }

// ANCHOR Using useState() example 1
// function App() {
// using as object
// const value = useState('Yes');
// using arraydestructing
//   const [answer] = useState('Yes');
//   console.log(answer);

//   return (
//     <div>
//       <h1>Is state important to know? {answer} </h1>
//     </div>
//   );
// }

// ANCHOR Using useState() example 2
// using class for state
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button>Change!</button>
//       </div>
//     );
//   }
// }

// using function for state
// function App() {
//   const [count, setCount] = useState(0);

//   function increment(){
//     setCount(prevCount => prevCount + 1);
//   }
//   function decrement(){
//     setCount(prevCount => prevCount - 1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// ANCHOR Using useState() example 3
// import React, { useState } from 'react';

// function App() {
//   const [inputData, setInputData] = useState({ firstName: '', lastName: '' });
//   const [contactsData, setContactsData] = useState([]);

//   function handleChange(event) {
// update our inputData state
//   const { name, value } = event.target;
//   setInputData(prevInputData => {
//     return {
//       ...prevInputData,
//       [name]: value,
//     };
//   });
// }

// function handleSubmit(event) {
// add the InputData to contactsData array
// event.preventDefault();
//     setContactsData(prevContacts => [...prevContacts, inputData]);
//   }

//   console.log(contactsData);

//   const contacts = contactsData.map(contact => (
//     <h2 key={contact.firstName + contact.lastName}>
//       {contact.firstName} {contact.lastName}
//     </h2>
//   ));

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="First Name"
//           name="firstName"
//           value={inputData.firstName}
//           onChange={handleChange}
//         />
//         <input
//           placeholder="Last Name"
//           name="lastName"
//           value={inputData.lastName}
//           onChange={handleChange}
//         />
//         <br />
//         <button>Add contact</button>
//       </form>
//       {contacts}
//     </>
//   );
// }

// ANCHOR Using useEffect() example 1
// Lifecycle components that useEffect replaces are
// componentDidMount
// componentDidUpdate
// componentWillUnmount

// Side Effetcs?
// Manual DOM manipulation
// Event listeners or timeouts and intervals
// import React, { useState, useEffect } from 'react';
// import randomColor from 'randomcolor';

// function App() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState('');

//   function increment() {
//     setCount(prevCount => prevCount + 1);
//   }
//   function decrement() {
//     setCount(prevCount => prevCount - 1);
//   }

//   useEffect(() => {
//     setColor(randomColor());
//   },[count])

//   return (
//     <div>
//       <h1 style={{color: color}}>{count}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default App;

// ANCHOR Using useEffect() example 2
import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('');

  // componentDidMount example
  useEffect(() =>{
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  // componentDidUpdate example
  useEffect(() => {
    setColor(randomColor());
  }, [count]);

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
    </div>
  );
}

export default App;
