import React from "react";

const SelectIHave = (props) => {
  return (
    <>
      <option value={props.id}>
        {props.title} ({props.id})
      </option>
    </>
  );
};

export default SelectIHave;
