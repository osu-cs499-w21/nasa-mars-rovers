/** @jsxImportSource @emotion/react */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import ProductItem from '../components/ProductItem'
import ProductsList from '../components/ProductsList'
import { Global, css, jsx } from '@emotion/react';
import { GridWrap, GridRow, GridColumn } from 'emotion-flex-grid'


const grid = css`
  margin: 30px;
`;

const ProductsContainer = ({ products, addToCart }) => (
  <div>
    <Global
      styles={css`
        .grid {
          ${grid}
        }

      `}
    />
    <ProductsList>
      {products.map(product =>
        <GridRow className="grid" display="inline-block">
          <ProductItem
            key={product.id}
            product={product}
            onAddToCartClicked={() => addToCart(product.id)} />
        </GridRow>
      )}
    </ProductsList>
  </div>
)

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  { addToCart }
)(ProductsContainer)
