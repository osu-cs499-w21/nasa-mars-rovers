/** @jsxImportSource @emotion/react */
import React from 'react'
import { Global, css, jsx } from '@emotion/react';
import ProductsContainer from './ProductsContainer';


function CandiesPage() {
  return(
    <div className="prodCont">
      <Global
        styles={css`
          body {
            overflow: hidden;
          }
          .prodCont {
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
      <ProductsContainer />
    </div>
  );
}

export default CandiesPage;
