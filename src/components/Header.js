/* eslint-disable no-undef */
/* eslint-disable react/no-this-in-sfc */
// import React, {Component} from "react";
// import ThemeContext from '../../themeContext';

// class Header extends Component {
//     static contextType = ThemeContext
//     Context Types only works for class components
//     render() {
//         const theme = this.context;
//         return (
//             <header className={`${theme}-theme`}>
//                 <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
//             </header>
//         )
//     }
// }

// export default Header

// ANCHOR Context example
// import React, {Component} from "react"
// import UserContext from "../../userContext"

// class Header extends Component {
//     static contextType = UserContext
//     render() {
//         const username = this.context
//         return (
//             <header>
//                 <p>Welcome, {username}!</p>
//             </header>
//         )
//     }
// }

// export default Header

// ANCHOR Consumer example 1
// import React from 'react';
// import ThemeContext from '../../themeContext';

// function Header(props) {
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <header className={`${theme}-theme`}>
//           <h2>{theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
//         </header>
//       )}
//     </ThemeContext.Consumer>
//   );
// }

// export default Header;

// ANCHOR Consumer example 2
import React from 'react';
import { ThemeContextConsumer } from './ThemeContextProvider';

function Header(props) {
  return (
    <ThemeContextConsumer>
      {context => (
        <header className={`${context.theme}-theme`}>
          <h2>{context.theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
