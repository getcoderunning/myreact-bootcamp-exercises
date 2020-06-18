// import React from "react"
// import Header from "./src/components/Header"
// import Button from "./src/components/Button"
// import './src/styles/style.scss'

// function App() {
//     return (
//         <div>
//             <Header />
//             <Button />
//         </div>
//     )
// }

// export default App

//  ANCHOR Context example 1
// import React from "react";
// import './src/styles/style.scss';

// import Header from './src/components/Header';
// import Button from './src/components/Button';
// import ThemeContext from './themeContext';

// function App() {
//   return (
// theme applied from components
// <div>
//   <Header />
//   <Button />
//   <Button />
// </div>

// theme applied from app
//     <div>
//       <Header />
//       <ThemeContext.Consumer>
//         {theme => <Button theme={theme} />}
//       </ThemeContext.Consumer>
//       <Button theme="light" />
//     </div>
//   );
// }

// export default App;

//  ANCHOR Context example 2
// import React from 'react';
// import Header from './src/components/Header';
// import UserContext from './userContext';
// import './src/styles/style.scss'

/**
 * Challenge:
 *
 * 1. Convert App and Header back into functional components
 * 2. Use UserContext.Consumer to consume the username context in both places
 */

// function App() {
//   return (
//     <div>
//       <Header />
//       <main>
//         <UserContext.Consumer>
//           {username => (
//             <p className="main">No new notifications, {username}! 🎉</p>
//           )}
//         </UserContext.Consumer>
//       </main>
//     </div>
//   );
// }

// export default App;

//  ANCHOR Moving COntext Provider to its own component
// import React from "react";
// import Header from "./src/components/Header";
// import Button from "./src/components/Button";
// import './src/styles/style.scss';

// function App() {
//   return (
//     <div>
//       <Header />
//       <Button />
//     </div>
//   );
// }

// export default App;

//  ANCHOR Context example 3

/**
 * Challenge: Add the ability for the user to choose a new username
 *
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 *
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 *
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
 */

import React from "react";

import Header from "./src/components/Header";
import { UserContextConsumer } from './userContext';

class App extends React.Component {
  state = {
    newUsername: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Header />
        <UserContextConsumer>
          {({ username }) => (
              <main>
            <p className="main">No new notifications, {username}! 🎉</p>      
              <input
                type="text"
                name="newUsername"
                placeholder="New username"
                value={this.state.newUsername}
                onChange={this.handleChange}
              />
              <button onClick={() => changeUsername(this.state.newUsername)}
               >Change Username</button>
            </main>
           )}
        </UserContextConsumer>
      </div>
    );
  }
}

export default App;
