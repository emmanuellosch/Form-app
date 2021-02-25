import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./components/ProductCard";
import Form from "./components/Form";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: uuidv4() }]);
  };

  return (
    <div>
      <h1>Add a Product</h1>
      <Form submitFunction={addProduct} />
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default App;
