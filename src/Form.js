import { Component, useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";

export default function Form({ submitFunction }) {
  const initialProduct = {
    name: "",
    price: "0",
    currency: "$",
    category: "Sport",
    packageSize: "",
    supportContact: "",
    tags: [],
    onSale: false,
  };

  const [product, setProduct] = useState(initialProduct);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setProduct({ ...product, [field.name]: value });
  };

  const addProductTag = (tag) => {
    setProduct({
      ...product,
      tags: [...product.tags, tag],
    });
  };

  function deleteTag(tagToDelete) {
    const newTagList = product.tags.filter((tag) => tag !== tagToDelete);
    setProduct({ ...product, tags: newTagList });
  }

  const isValidProduct = (product) =>
    isValidProductName(product.name) &&
    isValidEmailAdress(product.supportContact) &&
    isValidPrice(product.price);

  const isValidProductName = (name) => name.length >= 2;
  const isValidEmailAdress = (email) => email.includes("@");
  const isValidPrice = (price) => !price.includes(".");

  function submitForm(event) {
    event.preventDefault();
    if (isValidProduct(product)) {
      submitFunction(product);
      setProduct(initialProduct);
    } else {
      alert("Error in Form");
    }
  }

  return (
    <Form2 onSubmit={submitForm}>
      <h2>New Product</h2>
      <section>
        <label>
          Product name: {product.name}
          <br />
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
          Price:{product.price}
          <br />
          <input
            type="text"
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
            <option value="---Please select a Category">
              ---Please select a Category---
            </option>
            <option value="sport">Sport</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="living">Living</option>
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
      <br />
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

      <div>
        <Tag
          onCreateTag={addProductTag}
          tags={product.tags}
          onDeleteTag={deleteTag}
        />
      </div>
      <br />

      <section>
        <input
          type="checkbox"
          name="onSale"
          onChange={handleChange}
          checked={product.onSale}
        />
        On sale
      </section>
      <br />
      <ButtonBar>
        <button type="submit">Add</button>
        <button type="reset">Cancel</button>
      </ButtonBar>
    </Form2>
  );
}

const ButtonBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  button {
    border: none;
    padding: 0.3rem 2rem;
    width: 48%;
  }
  button[type="submit"] {
    background-color: #14b2cf;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  button[type="submit"]:hover {
    background-color: #1091a9;
  }

  button [type="reset"] {
    background-color: #ddd;
    color: #cd4747;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
  }

  button[type="reset"]:hover {
    background-color: #a72600;
    color: white;
  }
`;

const Form2 = styled.form`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

  input:not([type="radio"]):not([type="checkbox"]):not([name="tags"]),
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
  }
  input[type="radio"] {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    width: 100%;
  }

  input[type="checkbox"] {
    margin-right: 10px;
  }
`;
