import styled from "styled-components";

export default function ProductCard({ product }) {
  console.log(product);

  return (
    <Card>
      <h4>{product.name}</h4>
      <span>{product.price + ""}</span>
      <span>{product.currency}</span>
      <br />
      <span>{product.packageSize}</span>
      <br />
      <span>{product.supportContact}</span>
      <br />

      <p>
        {product.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </p>
      <br />
      <span>{product.onSale ? "yes" : "no"} </span>
    </Card>
  );
}

const Card = styled.div`
  background-color: #14b2cf;
  color: white;
  padding: 0.5rem 0.5rem 2rem 1.5rem;
  border-radius: 10px;
  max-width: 500px;
  margin: 2rem auto 0;
`;
