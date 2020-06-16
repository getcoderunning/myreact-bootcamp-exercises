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
import React from "react";
import Header from "./src/components/Header";
import Button from "./src/components/Button";
import './src/styles/style.scss'

function App() {
  return (
    <div>
      <Header />
      <Button />
    </div>
  );
}

export default App;
