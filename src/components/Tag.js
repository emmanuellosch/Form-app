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
    if (event.key === "Backspace") {
      onDeleteTag(tags[tags.length - 1]);
    }
  };

  return (
    <>
      <label htmlFor="tags">Product Tags</label>

      <TagsList>
        {tags.map((tag, index) => (
          <span key={index}>
            {tag}{" "}
            <DeleteIcon onClick={() => onDeleteTag(tag)}>&times;</DeleteIcon>
          </span>
        ))}
        <input
          type="text"
          name="tags"
          value={value}
          placeholder="add an tag"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </TagsList>
    </>
  );
}

const TagsList = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  background: white;
  border: 1px solid lightgrey;
  border-radius: 3px;

  span {
    background-color: #14b2cf;
    color: white;
    padding: 0.3rem;
    border-radius: 5px;
    margin-right: 0.5rem;
  }

  input[type="text"] {
    width: 33% !important;
    border: none;
    outline: none;
  }
`;

const DeleteIcon = styled.i`
  color: tomato;
  margin-left: 2rem;
  cursor: pointer;
`;
