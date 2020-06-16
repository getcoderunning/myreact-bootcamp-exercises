import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';
// import ThemeContext from '../themeContext';
// import UserContext from '../userContext';
// eslint-disable-next-line import/no-useless-path-segments
import {ThemeContextProvider} from '../src/components/ThemeContextProvider';

ReactDOM.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>,
  document.getElementById('root')
);
