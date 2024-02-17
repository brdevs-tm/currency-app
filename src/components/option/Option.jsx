// Option.jsx
import React, { Fragment } from "react";
import "./Option.css";

const Option = ({ currencies, value, onChange }) => {
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    console.log("Selected value:", selectedValue); // Log the selected value
    onChange(e);
  };

  return (
    <Fragment>
      <select
        name="converter"
        id="converter"
        value={value}
        onChange={handleOptionChange}
      >
        {currencies &&
          Object.keys(currencies).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>
    </Fragment>
  );
};

export default Option;
