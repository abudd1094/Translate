import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  }

  render() {
    return( 
      // adding all current values from state object as well as the method onLanguageChange into the Provider's value object --> now in imported this.context instances we have access to the state and method
      <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}> 
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context;

