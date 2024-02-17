// Calculate.jsx
import React, { Fragment } from "react";
import "./calculate.css";

const Calculate = ({
  value1,
  value2,
  currencyRates,
  selectedCurrency1,
  selectedCurrency2,
  onCalculate,
}) => {
  const handleCalculate = () => {
    if (!value1 || !currencyRates) {
      onCalculate(null);
      return;
    }

    const amount1 = parseFloat(value1);

    const conversionRate1 = currencyRates[selectedCurrency1];
    const conversionRate2 = currencyRates[selectedCurrency2]; // Get the conversion rate for the second selected currency

    const calculatedResult = (amount1 * conversionRate2) / conversionRate1;

    onCalculate(calculatedResult);
  };

  return (
    <Fragment>
      <button className="calcBtn" onClick={handleCalculate}>
        Calculate
      </button>
    </Fragment>
  );
};

export default Calculate;
