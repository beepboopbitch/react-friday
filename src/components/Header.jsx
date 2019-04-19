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
      `}</style>
      <div className="top">
        <div className="left">
          <img className="logo" src={logo}/>
        </div>
      </div>
    </header>
  );

}

export default Header;