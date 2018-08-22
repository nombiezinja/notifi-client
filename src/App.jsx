import React, { Component } from 'react';
import Bar from './Bar.jsx';

class App extends Component {
  
  componentWillMount() {
  }


  render() {    
    return (
        <div className='content'>
          <p>"hello</p>
          <Bar content={"world"}/>
        </div>
    ); 
  }
}

export default App;