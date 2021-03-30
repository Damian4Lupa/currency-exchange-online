import React from "react";

const SelectIWant = (props) => {
  return (
    <>
      <option value={props.id}>
        {props.title} ({props.id})
      </option>
    </>
  );
};

export default SelectIWant;
