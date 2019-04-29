import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Pop4(){
  return(
    <div className="main">
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
        <p>Company <input /></p>
        <p>Product <input /></p>
        <p>Price <input /></p>
      </div>
    </div>
  );
}

export default Pop4;
