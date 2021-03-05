/** @jsxImportSource @emotion/react */
import React from 'react'
import { Global, css, jsx } from '@emotion/react';
import CartContainer from './CartContainer';

function CartPage() {
  return(
    <div className="generalC">
      <Global
        styles={css`
          .generalC {
            margin-top: 210px;
            margin-left: 30px;
            overflow-y: auto;
            height: 370px;
          }
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      />
      <CartContainer />
    </div>
  );
}

export default CartPage;
