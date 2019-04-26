import React from 'react';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false
    };
  }

  handleClick(){
    console.log('test');
  }

  render(){
    return (
      <div>
        <p>This is my Popular component</p>
        <strong onClick={this.handleClick}>Click me to change my state!</strong>
      </div>
    );
  }
}

export default Popular;
