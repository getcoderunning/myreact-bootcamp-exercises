// import React from 'react';
// const UserContext = React.createContext();

// export default UserContext

import React from 'react';

const { Provider, Consumer } = React.createContext();

class UserContextProvider extends React.Component {
  state = {
    username: "christianbailon"
  }
  changeUsername = (username) => {
    this.setState({username: username})
  }

  render() {
      const {username} = this.state
      return(
        <Provider value={{username, changeUsername: this.changeUsername}}>{this.props.children}</Provider>
      )    
    }
}

export { UserContextProvider, Consumer as UserContextConsumer };
