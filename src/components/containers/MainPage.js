/** @jsxImportSource @emotion/react */
import React from 'react'
import { Global, css, jsx } from '@emotion/react';
import ProductsContainer from './ProductsContainer';
import Pink from "../images/pink1.png";
import CandiesPage from './CandiesPage';
import CartPage from './CartPage';


const nav = css`
  background-image: url(${Pink});
  background-repeat: repeat-x;
  height: 150px;
  width: 1390px;
  margin-left: -6px;
  margin-top: -11px;
  opacity: 0.8;
  padding-bottom: 40px;
  overflow: hidden;
  top: 0;
  position: fixed;
`;

const text = css`
  font-size: 23px;
  position: absolute;
  margin-top: 100px;
  text-align: center;
  width: 100%;
  font-style: italic;
  font-weight: bold;
  opacity: 0.8;
`;

const title = css`
  font-size: 40px;
  position: absolute;
  margin-top: 60px;
  text-align: center;
  width: 100%;
  font-style: italic;
`;

const images = css`
  height: 80px;
  width: 100px;
`;


function MainPage() {
  return(
    <div>
      <Global
        styles={css`
          body {
            background-image: url("https://i.pinimg.com/736x/b5/83/a7/b583a7f19948bc50ae42add863412413.jpg");
            background-repeat: repeat-x;
            background-attachment: fixed;
          }
          h1 {
            font-family: Georgia, sans-serif;
            letter-spacing: -2px;
            color: white;
          }
          img {
              ${images}
              margin-top: 10px;
          }
          .nav {
            ${nav}
          }
          .title {
            ${title}
          }
          .text {
            ${text}
          }
          .links {
            margin-top: 160px;
            width: 300px;
            overflow: hidden;
            top: 0;
            position: fixed;
            font-style: italic;
            font-weight: bold;
            opacity: 0.8;
            font-size: 20px;
          }
          a {
            cursor: pointer;
          }
          a:hover {
            background:rgba(255,255,255, 0.4);
            border-radius: 20px;
            text-align: center;
          }
          #link1 {
            float: left;
            margin-right: 10px;
          }
          #link2 {
            float: right;
          }
          .general {
            display: flex;
            justify-content: center;
          }
        `}
      />
      <div className="nav">
        <h1 className="title">Penny Candy Store</h1>
        <p className="text">Explore your candies here</p>
      </div>
      <div className="links">
        <a id="link1" onClick={() => {window.location.href="/products"}}>Candies</a>
        <a id="link2" onClick={() => {window.location.href="/cart"}}>Shopping Cart</a>
      </div>
    </div>
  );
}

export default MainPage;
