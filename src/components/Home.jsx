import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

function Home(){
  return(
  <div>
    <style jsx>{`
      .quote{
        font-size: 30px;
        text-align: center;
        margin-top: 30px;
        margin-left: 10%;
        margin-right: 10%;
      }
      @media screen and (max-width: 900px){
        
      }
      @media screen and (max-width: 640px){
        .quote{
          font-size: 25px;
        }
      }
      @media screen and (max-width: 470px){
        
      }
    `}</style>
    
    
    <div className="quote">
      <p>If it's handcrafted, vintage, custom, or unique, it's on Etsy.</p>
    </div>
    
    
    
  </div>
  );
}

export default Home;