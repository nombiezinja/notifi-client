import React, {Component} from 'react';

class Bar extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      }
  }

  render(){
    return (
      <div className="bar">
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}
export default Bar;