import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import sideImg from '../assets/images/sideImg.jpg'
import mainImg from '../assets/images/mainImg.jpg'

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
      .shopGrid {
        margin: 30px 3% 0 3%;
        display: grid;
        grid-template-columns: 1fr 1fr 0.6fr 1.4fr;
        grid-template-rows: 1fr 0.8fr;
        grid-template-areas: "main main main side" "main main main side";
      }
      .main {
        grid-area: main;
        height: 300px;
        width: 97%;
        display: flex;
        flex-direction: row;
      }
      .mainDescriptor{
        text-align: center;
        padding: 80px 5px 0 5px;
        font-size: 15px;
        background-color: yellow;
      }
      .main img {
        height: 300px;
        width:60%;
      }
      .side {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        grid-area: side;
        height: 300px;
      }
      .sideDescriptor img{
        width: 100%;
        height: 220px;
      }
      .sideDescriptor p{
        position: absolute;
        width: 180px;
        font-size: 25px;
        margin-left: 15px;
        margin-top: 15px;
      }
      .sideDescriptor #subP{
        position: absolute;
        width: 180px;
        font-size: 15px;
        margin-left: 15px;
        margin-top: 90px;
      }
      .sideBottom{
        background-color: yellow;
        height: 20%;
        text-align: center;
      }
      .sideBottom p{
        margin-top: 20px;
      }
      
      @media screen and (max-width: 900px){
        .shopGrid{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr 1.2fr 0.8fr 1fr;
          grid-template-areas: "main main main main" "main main main main" "side side side side" "side side side side";
        }
        .main{
          width: 100%;
        }
        .side{
          margin-top: 20px;
          flex-direction: row;
          justify-content: space-between;
          grid-area: side;
          height: 200px;
        }
        .sideDescriptor img{
          width: 95%;
          height: 200px;
        }
        .sideBottom{
          background-color: yellow;
          height: 100%;
          width: 50%;
          text-align: center;
        }
        .sideBottom p{
          margin-top: 80px;
        }
      }
      
      @media screen and (max-width: 640px){
        .quote{
          font-size: 25px;
        }
        .shopGrid{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1.2fr 0.8fr .5fr;
          grid-template-areas: "main main main main" "side side side side" ". . . .";
        }
        .main{
          flex-direction: column-reverse;
        }
        .main img{
          width: 100%;
          height: 75%;
        }
        .mainDescriptor{
          padding: 15px 0 0 0;
          height: 25%;
          font-size: 13px;
        }
        .side{
          margin-top: 20px;
          flex-direction: column;
          justify-content: space-between;
          grid-area: side;
          height: 200px;
        }
        .sideDescriptor img{
          width: 100%;
          height: 200px;
        }
        .sideBottom{
          background-color: yellow;
          width: 100%;
          margin-top: 20px;
          height: 80px;
          text-align: center;
        }
        .sideBottom p{
          margin-top: 30px;
          padding-bottom: 40px;
          text-align: left;
          margin-left: 10px;
        }

      }
      @media screen and (max-width: 470px){
        
      }
    `}</style>
    
    
    <div className="quote">
      <p>If it's handcrafted, vintage, custom, or unique, it's on Etsy.</p>
    </div>
    
    <div className="shopGrid">
      <div className="main">
        <div className="mainDescriptor">
          <h1>Let imagination light up your life.</h1>
          <p>Shop Home & Living ></p>
        </div>
        <img src={mainImg}/>
      </div>
      <div className="side">
        <div className="sideDescriptor">
          <p>Find your perfect "I do" details.</p>
          <p id="subP">Shop wedding ></p>
          <img src={sideImg}/>
        </div>
        <div className="sideBottom">
          <p>Get it quick with ready-to-ship finds ></p>
        </div>
      </div>
    </div>
    
    <div className="descriptions">
      <div className="des des1">
        <p className="checked">Unique everything</p>
        <p className="def">We have millions of one-of-a-kind items<span className="defHide">, so you can find whatever you need (or really, really want)</span>.</p>
      </div>
      <div className="des des2">
        <p className="checked">Independent sellers</p>
        <p className="def">Buy directly from someone who put their heart and soul into making something special.</p>
      </div>
      <div className="des des3">
        <p className="checked">Secure shopping</p>
        <p className="def">We use best-in-class technology to protect your transactions.</p>
      </div>
    </div>
    
    
    
  </div>
  );
}

export default Home;