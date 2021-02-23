import { useState } from "react";
import styled from "styled-components";

export default function Tag({ onCreateTag, tags }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => setValue(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onCreateTag(value);
      setValue("");
    }
  };

  return (
    <>
      <label htmlFor="tags">Product Tags</label>
      <input
        type="text"
        name="tags"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <TagsList>
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </TagsList>
    </>
  );
}

const TagsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  span {
    background: deeppink;
    padding: 0.3rem;
    border-radius: 5px;
  }
`;
