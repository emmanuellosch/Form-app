import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductCard from "./ProductCard";
import Form from "./Form";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: uuidv4() }]);
  };

  return (
    <div>
      <Form submitFunction={addProduct} />
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}

export default App;
