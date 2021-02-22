import "./App.css";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    currency: "",
    category: "Green",
    package_size: "",
    support_contact: "",
    product_tags: "",
    on_sale: false,
  });

  const handleChange = (event) => {
    const field = event.target;
    const value =
      event.target.name === "on_sale"
        ? event.target.checked
        : event.target.value;

    setProduct({
      ...product,
      [field.name]: value,
    });
  };

  return (
    <div>
      <form>
        <h2>New Product</h2>
        <section>
          <label>
            Product name: <br />
            <input
              type="text"
              name="product_name:"
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
              name="price:"
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
              name="currency:"
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
              placeholder="Select a category"
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
          <p>package size:{product.package_size}</p>
          <input type="radio" radio name="gender" value="male" />S
          <input type="radio" radio name="gender" value="male" />M
          <input type="radio" radio name="gender" value="male" />L
        </section>

        <section>
          <label>
            Support contact (email): <br />
            <input
              typ="text"
              name="support contact:"
              onChange={handleChange}
              value={product.supportContact}
            />
          </label>
        </section>

        <section>
          <label>
            Product tags <br />
            <input
              typ="tags"
              name="product tags"
              onChange={handleChange}
              value={product.product_tags}
            />
          </label>
        </section>

        <section>
          <input
            type="checkbox"
            name="on sale"
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
      </form>
    </div>
  );
}

export default App;
