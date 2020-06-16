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

//  ANCHOR Context example
import React from "react";
import './src/styles/style.scss';

import Header from './src/components/Header';
import Button from './src/components/Button';
import ThemeContext from './themeContext';

function App() {
  return (
    // theme applied from components
    // <div>
    //   <Header />
    //   <Button />
    //   <Button />
    // </div>

    // theme applied from app
    <div>
      <Header />
      <ThemeContext.Consumer>
        {theme => <Button theme={theme} />}
      </ThemeContext.Consumer>
      <Button theme="light" />
    </div>
  );
}

export default App;
