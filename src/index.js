import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
// import ThemeContext from '../themeContext';
import UserContext from '../userContext';

ReactDOM.render(
  <UserContext.Provider value="christianbailon">
    <App />
  </UserContext.Provider>,
  document.getElementById('root')
);
