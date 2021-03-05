/** @jsxImportSource @emotion/react */
import React from 'react'
import PropTypes from 'prop-types'
import { Global, css, jsx } from '@emotion/react';


const nameStyle = css`
  margin: 10px;
`;

const pStyle = css`
  margin: 10px;
  font-size: 17px;
`;

const center = css`
  text-align: center;
`;

const children = css`
`;

const together = css`
  width: 150px;
  height: 180px;
  overflow: hidden;
  white-space: pre-line;
  background: #ed5e71;
  opacity: 0.9;
  ${center};
`;


const Product = ({ price, quantity, title, photoUrl }) => (
  <div>
    <Global
      styles={css`
        .together {
          ${together}
        }
        .children {
          ${children}
        }
        .nameStyle {
          ${nameStyle}
        }
        .pStyle {
          ${pStyle}
        }

      `}
    />

  <div className="together">
      <img src={photoUrl}/>
      <div className="children">
        <h3 className="nameStyle">{title}</h3>
        <p className="pStyle">${price}{quantity ? ` x ${quantity}` : null}</p>
      </div>
    </div>

  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
