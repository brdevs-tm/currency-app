import React, { Fragment } from "react";
import "./input.css";

const Input = ({ value, onChange }) => {
  const sanitizedValue = value !== null ? value : "";

  return (
    <Fragment>
      <input type="number" value={sanitizedValue} onChange={onChange} />
    </Fragment>
  );
};

export default Input;
