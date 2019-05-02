import React from "react";
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import popularReducer from './../reducers/popular-reducer.js';

function Pop4(props){
  let _company = null;
  let _product = null;
  let _price = null;

  function updater(event) {
    const newCompany = props.popularReducer.company;
    newCompany[3] = _company.value;
    const newProduct = props.popularReducer.product;
    newProduct[3] = _product.value;
    const newPrice = props.popularReducer.price;
    newPrice[3] = _price.value;
    console.log(newCompany)
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'FORM_SUBMIT',
      company: newCompany,
      product: newProduct,
      price: newPrice,
    };
    dispatch(action);
    _company.value = '';
    _product.value = '';
    _price.value = '';
  }


  return(
    <div>
      <form className="main" onSubmit={updater}>
        <h1>pop 4</h1>
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

Pop4 = connect(mapStateToProps)(Pop4);

export default Pop4;
