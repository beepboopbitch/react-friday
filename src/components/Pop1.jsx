import React from "react";
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom';
import popularReducer from './../reducers/popular-reducer.js';

function Pop1(props){
  let _company = null;
  let _product = null;
  let _price = null;

  function updater(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'FORM_SUBMIT',
      company: _company.value,
      product: _product.value,
      price: _price.value,
    };
    dispatch(action);
    _company.value = '';
    _product.value = '';
    _price.value = '';
  }


  return(
    <div>
      <form className="main" onSubmit={updater}>
        <h1>pop 1</h1>
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
        <div className="box">
          <p>Company <input type='text' id='company' placeholder='Company Name' ref={(input) => {_company = input;}}/></p>
          <p>Product <input type='text' id='product' placeholder='Product Name' ref={(input) => {_product = input;}} /></p>
          <p>Price <input type='text' id='price' placeholder='Price' ref={(input) => {_price = input;}}/></p>
          <p>{props.popularReducer.company}</p>
          <button type='submit' style={{marginBottom: 20}}></button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    popularReducer: state
  }
}

Pop1 = connect(mapStateToProps)(Pop1);

export default Pop1;
