import React, { useState } from 'react';

const ProductsForm = () => {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [isAvailable, setIsAvailable] = useState(false)


  const submit = e => {
    e.preventDefault();
    const product = {
      name: name,
      category: category,
      price: price,
      isAvailable: isAvailable
    }
    console.log(product)
  }

  return (
    <form onSubmit={submit}>

      <div className="input-container">
        <label htmlFor='name'>Name</label>
        <input
          type="text"
          id='name'
          onChange={e => setName(e.target.value)}
          value={name}
        />

      </div>

      <div className="input-container">
        <label htmlFor='category'>Category</label>
        <input
          type="text" 
          id='category' 
          onChange={e => setCategory(e.target.value)}
          value={category}
        />

      </div>

      <div className="input-container">
        <label htmlFor='price'>Price</label>
        <input
          type="number"
          id='price'
          onChange={e => setPrice(e.target.value)}
          value={price}
         />
      </div>

      <div className="input-container">
        <label htmlFor='is-available'>Is Available</label>
        <input
          type="checkbox"
          id='is-available'
          checked={isAvailable} // checked es equivalente a value
          onChange={e => setIsAvailable(e.target.checked)}
         />

      </div>

      <div className="products-form">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ProductsForm;
