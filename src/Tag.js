import { useState } from "react";
import styled from "styled-components";

export default function Tag({ onCreateTag, onDeleteTag, tags }) {
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
          <span key={index}>
            {tag}{" "}
            <DeleteIcon onClick={() => onDeleteTag(tag)}>&times;</DeleteIcon>
          </span>
        ))}
      </TagsList>
    </>
  );
}

const TagsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  justify-content: space-around;

  span {
    background-color: #14b2cf;
    color: white;
    padding: 0.3rem;
    border-radius: 5px;
  }
`;

const DeleteIcon = styled.i`
  color: tomato;
  margin-left: 2rem;
  cursor: pointer;
`;
