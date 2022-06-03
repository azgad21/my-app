import { useState } from "react";
import "./App.css";
import ProductsForm from "./components/ProductsForm"
import ProductsList from "./components/ProductsList";



function App() {

  const initialProducts  = [
    {
      name: "jabon",
      category: "higiene",
      price: 2,
      isAvailable: false
    },
    {
      name: "Galaxy S20",
      category: "Technology",
      price: 2000,
      isAvailable: true
    }
  ]

  const [products, setProducts] = useState(initialProducts)

  return (
    <div className="App">
     <ProductsForm/>
     <ProductsList products={products}/>
    </div>
  );
}

export default App;
