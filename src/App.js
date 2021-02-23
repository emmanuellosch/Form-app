import "./App.css";
import { useState } from "react";

import Form from "./Form";

function App() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    currency: "",
    category: "Green",
    product_packageSize: "",
    product_supportContact: "",
    product_productTags: [],
    onSale: false,
  });

  const handleChange = (event) => {
    const field = event.target;
    const value = field.type === "checkbox" ? field.checked : field.value;

    setProduct({
      ...product,
      [field.name]: value,
    });
  };

  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
