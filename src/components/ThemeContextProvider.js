import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    theme: 'light',
  };

  toggleTheme = () => {
    this.setState(prevState => {
      return {
        theme: prevState.theme === 'light' ? 'dark' : 'light',
      };
    });
  };

  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
