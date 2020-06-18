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

function App() {
  // using as object
  // const value = useState('Yes');
  // using arraydestructing
  const [answer] = useState('Yes');
  console.log(answer);

  return (
    <div>
      <h1>Is state important to know? {answer} </h1>
    </div>
  );
}

export default App;
