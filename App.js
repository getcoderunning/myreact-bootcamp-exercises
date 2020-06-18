import React, {useState} from 'react';

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
function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(prevCount => prevCount + 1);
  }
  function decrement(){
    setCount(prevCount => prevCount - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
