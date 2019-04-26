import React from 'react';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false
    };
  }

  render(){
    return (
      <div>
        <p>This is my Popular component</p>
      </div>
    );
  }
}

export default Popular;
