import React from 'react';
import Pop1 from './Pop1';
import Pop2 from './Pop2';
import Pop3 from './Pop3';
import Pop4 from './Pop4';
import Pop5 from './Pop5';
import Pop6 from './Pop6';

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
      <Pop2 />
      <Pop3 />
      <Pop4 />
      <Pop5 />
      <Pop6 />
      </div>
    );
  }
}

export default Popular;
