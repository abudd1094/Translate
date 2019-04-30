import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext; // gives us access to LanguageContext Provider values as this.context object

  render() {
    console.log(this.context)
    return(
      <div>
        Select a language: 
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag de" onClick={() => this.context.onLanguageChange('german')} />
      </div>
    )
  }
}

export default LanguageSelector;

