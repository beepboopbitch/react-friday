import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Pop2 from './Pop2';
import Pop3 from './Pop3';
import Pop4 from './Pop4';
import Pop5 from './Pop5';
import Pop6 from './Pop6';

function Pop1(){
  return(
    <div className="main">
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
        <p>Company <input /></p>
        <p>Product <input /></p>
        <p>Price <input /></p>
      </div>
      <div>
        <p><Link to="/pop6">example text</Link></p>
      </div>
    </div>

  );
}

export default Pop1;
