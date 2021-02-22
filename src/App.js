import "./App.css";
import { useState } from "react";

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
      <h2>New Product</h2>
      <section>
        <label>
          Product name: <br />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={product.name}
          />
        </label>
      </section>

      <section>
        <label>
          Price:
          <br />
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={product.price}
          />
        </label>
      </section>

      <section>
        <label>
          Currency: <br />
          <input
            type="number"
            name="currency"
            onChange={handleChange}
            value={product.currency}
          />
        </label>
      </section>

      <section>
        <label>
          Category: <br />
          <select
            name="category"
            onChange={handleChange}
            value={product.category}
          >
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
        </label>
      </section>

      <section>
        <p>package size:{product.packageSize}</p>
        <input
          type="radio"
          name="packageSize"
          onChange={handleChange}
          value="small"
          checked={product.packageSize === "small"}
        />
        S
        <input
          type="radio"
          name="packageSize"
          onChange={handleChange}
          value="medium"
          checked={product.packageSize === "medium"}
        />
        M
        <input
          type="radio"
          name="packageSize"
          onChange={handleChange}
          value="large"
          checked={product.packageSize === "large"}
        />
        L
      </section>

      <section>
        <label>
          Support contact (email): <br />
          <input
            typ="text"
            name="supportContact"
            onChange={handleChange}
            value={product.supportContact}
          />
        </label>
      </section>

      <section>
        <label>
          Product tags <br />
          <input
            typ="text"
            name="productTags"
            onChange={handleChange}
            value={product.productTags}
          />
        </label>
      </section>

      <section>
        <input
          type="checkbox"
          name="onSale"
          onChange={handleChange}
          checked={product.onSale}
        />
        On sale
      </section>

      <section>
        <button input type="submit">
          Add
        </button>
        <button input type="submit">
          Cancel
        </button>
      </section>
      <h3>You write this:{product.name}</h3>
    </div>
  );
}

export default App;
