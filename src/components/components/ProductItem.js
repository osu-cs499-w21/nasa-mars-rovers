/** @jsxImportSource @emotion/react */
import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import { Global, css, jsx } from '@emotion/react';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'


const ProductItem = ({ product, onAddToCartClicked }) => (
  <div>
    <Global
      styles={css`
        .addBtn {
          display: inline-block;
          text-decoration: none;
          background: #ff8181;
          color: #FCF0F1;
          font-size: 13px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          text-align: center;
          font-weight: bold;
          vertical-align: middle;
          overflow: hidden;
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
          border-bottom: solid 3px #bd6565;
          transition: .4s;
          outline: none;
          border:none;
        }

        .addBtn:active {
          -ms-transform: translateY(2px);
          -webkit-transform: translateY(2px);
          transform: translateY(2px);
          box-shadow: 0 0 9px rgba(0, 0, 0, 0.15);
          border-bottom: none;
        }
      `}
    />
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
      photoUrl={product.photoUrl}
       />
     <button className="addBtn"
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'Add' : 'Sold Out'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
