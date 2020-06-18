import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
// import ThemeContext from '../themeContext';
// import UserContext from '../userContext';
// eslint-disable-next-line import/no-useless-path-segments
// import {ThemeContextProvider} from '../src/components/ThemeContextProvider';
import {UserContextProvider} from '../userContext';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('root')
);
