import styled from "styled-components";

export default function ProductCard({ product }) {
  console.log(product);

  return (
    <Card>
      <h4>{product.name}</h4>
      <span>{product.price + ""}</span>
      <span>{product.currency}</span>
      <span>{product.packageSize}</span>
      <span>{product.supportContact}</span>

      <p>
        {product.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </p>
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
