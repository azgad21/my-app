import React from 'react';

const ProductsList = ({products}) => {
  return (
    <ul>
      {
        products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p><b>Category:</b> {product.category} </p>
            <p><b>Price: </b> {product.price} </p>
            <p><b>Is Available: </b> {product.isAvailable.toString()} </p>
          </li>
        ))
      }
    </ul>
  );
};

export default ProductsList;