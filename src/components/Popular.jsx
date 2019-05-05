import React from "react";
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import popularReducer from './../reducers/popular-reducer.js';

function Popular(props){
  let _company = null;
  let _product = null;
  let _price = null;
  let _number = null;

  function updater(event) {
    const selectNum = parseInt(_number.value) - 1;
    const newCompany = props.popularReducer.company;
    newCompany[selectNum] = _company.value;
    const newProduct = props.popularReducer.product;
    newProduct[selectNum] = _product.value;
    const newPrice = props.popularReducer.price;
    newPrice[selectNum] = _price.value;
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
        <h1>Popular editer:</h1>
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
          <p>Select Popular to edit:
            <select id='number' ref={(select) => {_number = select;}}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </p>

          <p>Company: <input type='text' id='company' placeholder='Company Name' ref={(input) => {_company = input;}}/></p>
          <p>Product: <input type='text' id='product' placeholder='Product Name' ref={(input) => {_product = input;}} /></p>
          <p>Price: <input type='text' id='price' placeholder='Price' ref={(input) => {_price = input;}}/></p>
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

Popular = connect(mapStateToProps)(Popular);

export default Popular;
