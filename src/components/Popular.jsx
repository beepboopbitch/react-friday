import React from 'react';
import Pop1 from './Pop1';

class Popular extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fromVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  render(){
    return (
      <div>
        <Pop1 />
        <input />
      </div>
    );
  }
}

export default Popular;
