import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderButton(color) {
    return(
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => value === 'english' ? 'Submit' : 'Einreichen'}
        </LanguageContext.Consumer>
      </button>
    )
  }
  
  render() {
    return(
      <ColorContext.Consumer >
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;