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
      <div className="main">
        <style jsx>{`
          .box{
            border: 2px solid black;
            width: 400px;
            padding-left: 20px;
          }
          .main{
            margin-left: 50px;
          }

        `}</style>
        <Pop1 />
        <div className="box">
          <p>Company <input /></p>
          <p>Product <input /></p>
          <p>Price <input /></p>
        </div>
      </div>
    );
  }
}

export default Popular;
