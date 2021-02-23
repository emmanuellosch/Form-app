import { Component, useState } from "react";
import styled from "styled-components";

export default function Form() {
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
    <form>
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
          Currency: {product.currency} <br />
          <select
            type="number"
            name="currency"
            onChange={handleChange}
            value={product.currency}
          >
            <option value="$">Dollar</option>
            <option value="€">Euro</option>
          </select>
        </label>
      </section>

      <section>
        <label>
          Category:{product.category} <br />
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
      <br />

      <h2>Ausgabe:</h2>

      <p>You write this:{product.name}</p>
      <p>You write this:{product.price}</p>
      <p>You write this:{product.currency}</p>
      <p>You write this:{product.category}</p>
      <p>You write this:{product.packageSize}</p>
      <p>You write this:{product.supportContact}</p>
      <p>You write this:{product.onSale ? "yes" : "no"}</p>
    </form>
  );
}