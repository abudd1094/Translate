import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;
  
  render() {
    return(
      <div className="ui field">
        <label htmlFor="">Name</label>
        <input type="text"/>
      </div>
    )
  }
}

export default Field;