/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
import React from 'react';
// import ThemeContext from '../../themeContext';
import PropTypes from 'prop-types';

function Button(props) {
  // Using themecontext on a component
  // return (
  //   <ThemeContext.Consumer>
  //     {theme => <button className={`${props.theme}-theme`}>Switch Theme</button>}
  //   </ThemeContext.Consumer>
  // );

  // using theme as props coming from app
  return <button className={`${props.theme}-theme`}>Switch Theme</button>;
}

// eslint-disable-next-line react/no-typos
Button.PropTypes = {
  theme: PropTypes.oneOf(['light', 'dark']),
};

Button.defaultProps = {
  theme: 'light',
}

export default Button;
