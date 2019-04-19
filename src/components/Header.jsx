import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Header(){
  return(
    <header>
    <style jsx>{`
      .top{
        padding: 15px 20px 0 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid lightgray;
      }
      .logo{
        height: 50px;
      }
      .search{
        color: white;
      }
      #signIn{
        background-color: white;
        border-color: black;
        border-radius: 3px;
        height: 35px;
        width:70px;
        font-size: 15px;
        margin-bottom: 20px;
        margin-left: 20px;
      }
      .right{
        display: flex;
        flex-direction: row;
      }
      .left{
        display: flex;
        flex-direction: row;
        margin-bottom: 15px;
      }
      .input{
        margin-top: 10px;
      }
      .searchInput{
        height: 25px;
        width: 200px;
        border-radius: 5px;
        background-color: lightgray;
      }
      .searchButton{
        background-color: black;
        height: 30px;
        border-color: black;
        width: 80px;
        font-size: 15px;
        border-radius: 5px;
      }
      .right p{
        margin-left: 20px;
        margin-top: 10px;
      }
      .bottomMain{
        border: 1px solid lightgray;
      }
      .bottom{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 10px 0 10px 20px;
      }
      .bottom p{
        width: 70px;
        text-align: center;
        font-size: 15px;
      }
      .bottomSearch{
        display: none;
      }  
      @media screen and (max-width: 900px){
        .input{
          display: none;
        }
        .bottom{
          display: none;
        }
        .bottomSearch{
          display: block;
          width: 100%;
          padding-left: 5%;
          padding-right: 5%;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .searchInput{
          width: 70%;
        }
        .searchButton{
          width: 19%;
        }
      }
      @media screen and (max-width: 520px){
        .one{
          display: none;
        }
      }
      @media screen and (max-width: 420px){
        .two{
          display: none;
        }
      }
      `}</style>
      <div className="top">
        <div className="left">
          <Link to="/"><img className="logo" src={logo}/></Link>
          <div className="input">
            <input className="searchInput"/>
            <button type="button" className="searchButton"><span className="search">Search</span></button>
          </div>
        </div>
        <div className="right">
          <p className="one">Sell on Etsy</p>
          <p className="two">Register</p>
          <button type="button" id="signIn">Sign in</button>
          <p>Discover</p>
          <p>Cart</p>
        </div>
      </div>
      <div className="bottomMain">
        <div className="bottomSearch">
          <input className="searchInput"/>
          <button type="button" className="searchButton"><span className="search">Search</span></button>
        </div>
        <div className="bottom">
          <p>Jewelry & Accessories</p>
          <p>Clothing & Shoes</p>
          <p>Home & Living</p>
          <p>Wedding & Party</p>
          <p>Toys & Entertainment</p>
          <p>Art & Collectibles</p>
          <p>Craft Supplies</p>
          <p>Vintage</p>
          <p>Gifts</p>
        </div>
      </div>
    </header>
  );
}

export default Header;