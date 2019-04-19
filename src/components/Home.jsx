import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import sideImg from '../assets/images/sideImg.jpg'
import mainImg from '../assets/images/mainImg.jpg'
import pop1 from '../assets/images/pop1.jpg'
import pop2 from '../assets/images/pop2.jpg'
import pop3 from '../assets/images/pop3.jpg'
import pop4 from '../assets/images/pop4.jpg'
import pop5 from '../assets/images/pop5.jpg'
import pop6 from '../assets/images/pop6.jpg'
import Pop1 from './Pop1';
import Pop2 from './Pop2';
import Pop3 from './Pop3';
import Pop4 from './Pop4';
import Pop5 from './Pop5';
import Pop6 from './Pop6';

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
      .descriptions{
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        margin: 10px 0 0 10px;
      }
      .des{
        width: 33%;
        margin: 0 20px 0 20px;
      }
      .checked{
        font-size: 17px;
        margin-bottom: 5px;
        text-align: center;
      }
      .def{
        font-size: 15px;
        text-align: center;
      }
      .descriptor{
        text-align: center;
        margin-top: 30px;
        font-size: 30px;
      }
      .populars{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        grid-template-areas: "pop1 pop2 pop3 pop4 pop5 pop6";
        margin: 2.5% 2.5% 0 2.5%;
      }
      .pop1 { grid-area: pop1; }
      .pop2 { grid-area: pop2; }
      .pop3 { grid-area: pop3; }
      .pop4 { grid-area: pop4; }
      .pop5 { grid-area: pop5; }
      .pop6 { grid-area: pop6; }
      .pop{
        width: calc(100%/6);
      }
      .pop img{
        margin-left: 50%;
        width: 500%;
      }
      .text{
        margin-left: 50%;
        width: 500%;
      }
      .price{
        font-size: 18px;
        font-weight: bold;
      }
      .company{
        color: gray;
        font-size: 15px;
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
        .descriptions{
          padding-top: 5px;
          display: flex;
          flex-direction: row;
          margin: 0 0 0 10px;
        }
        .des{
          width: 33%;
          margin: 0 20px 0 20px;
        }
        .checked{
          font-size: 15px;
          margin-bottom: 5px;
        }
        .def{
          font-size: 12px;
        }
        .descriptor{
          font-size: 23px;
        }
        .populars{
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          grid-template-areas: "pop1 pop2 pop3" "pop4 pop5 pop6";
          margin: 2.5% 2.5% 0 2.5%;
        }
        .pop{
          width: calc(100%/6);
          margin-bottom: 20px;
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
          height: 20%;
          font-size: 13px;
        }
        .mainDescriptor h1 {
          margin: 0;
        }
        .mainDescriptor p {
          margin: 0;
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
        .des2, .des3{
          display: none;
        }
        .des1{
          width: 70%;
          margin-left: 15%;
        }
        .descriptions{
          margin: 0 15% 0 15%;
        }
        .checked{
          font-size: 17px;
        }
        .def{
          font-size: 15;
        }
        .defHide{
          display: none;
        }
        .descriptor{
          font-size: 23px;
        }
        @media screen and (max-width: 470px){
          .populars{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-template-areas: "pop1 pop2" "pop3 pop4" "pop5 pop6";
            margin: 2.5% 2.5% 0 2.5%;
          }
        }
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
    
    <p className="descriptor">Popular right now</p>
    
    <div className="populars">
    <div className="pop pop1">
      <img src={pop1}/>
      <div className="text product product1">
        <p><Link to="/pop1">example text</Link></p>
      </div>
      <div className="text company company1">
        <p>example text</p>
      </div>
      <div className="text price price1">
        <p>$36.00</p>
      </div>
    </div>
    <div className="pop pop2">
      <img src={pop2}/>
      <div className="text product product2">
        <p><Link to="/pop2">example text</Link></p>
      </div>
      <div className="text company company2">
        <p>example text</p>
      </div>
      <div className="text price price2">
        <p>$36.00</p>
      </div>
    </div>
    <div className="pop pop3">
      <img src={pop3}/>
      <div className="text product product3">
        <p><Link to="/pop3">example text</Link></p>
      </div>
      <div className="text company company3">
        <p>example text</p>
      </div>
      <div className="text price price3">
        <p>$36.00</p>
      </div>
    </div>
    <div className="pop pop4">
      <img src={pop4}/>
      <div className="text product product4">
        <p><Link to="/pop4">example text</Link></p>
      </div>
      <div className="text company company4">
        <p>example text</p>
      </div>
      <div className="text price price4">
        <p>$36.00</p>
      </div>
    </div>
    <div className="pop pop5">
      <img src={pop5}/>
      <div className="text product product5">
        <p><Link to="/pop5">example text</Link></p>
      </div>
      <div className="text company company5">
        <p>example text</p>
      </div>
      <div className="text price price5">
        <p>$36.00</p>
      </div>
    </div>
    <div className="pop pop6">
      <img src={pop6}/>
      <div className="text product product6">
        <p><Link to="/pop6">example text</Link></p>
      </div>
      <div className="text company company6">
        <p>example text</p>
      </div>
      <div className="text price price6">
        <p>$36.00</p>
      </div>
    </div>
  </div>
    
    
  </div>
  );
}

export default Home;