// MainContent.jsx
import React, { Fragment, useEffect, useState } from "react";
import "./mainContent.css";

import ExchangeBtn from "../exchangeBtn/ExchangeBtn";
import Option from "../option/Option";
import Input from "../input/Input";
import Calculate from "../calculate/Calculate";

const MainContent = () => {
  const [currencyData, setCurrencyData] = useState(null);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [selectedCurrency1, setSelectedCurrency1] = useState("USD");
  const [selectedCurrency2, setSelectedCurrency2] = useState("USD");

  useEffect(() => {
    fetch(
      `https://v6.exchangerate-api.com/v6/d7b25bfd38e2d77262aeb7f7/latest/USD`
    )
      .then((response) => response.json())
      .then((data) => setCurrencyData(data));
  }, []);

  const handleSwap = () => {
    const tempValue1 = value1;
    const tempSelectedCurrency1 = selectedCurrency1;
    setValue1(value2);
    setSelectedCurrency1(selectedCurrency2);
    setValue2(tempValue1);
    setSelectedCurrency2(tempSelectedCurrency1);
  };

  const handleCalculate = (calculatedResult) => {
    setValue2(calculatedResult);
  };

  return (
    <Fragment>
      <div className="main-content">
        <div className="header">
          <h1>Currency Converter</h1>
          <span>
            All rate will be updated automatically when the currency is updated.
          </span>
        </div>
        <div className="value-row">
          <div className="first-currency">
            <Option
              currencies={currencyData?.conversion_rates}
              value={selectedCurrency1}
              onChange={(e) => setSelectedCurrency1(e.target.value)}
            />
            <Input value={value1} onChange={(e) => setValue1(e.target.value)} />
          </div>
          <ExchangeBtn onClick={handleSwap} />
          <div className="second-currency">
            <Option
              currencies={currencyData?.conversion_rates}
              value={selectedCurrency2}
              onChange={(e) => setSelectedCurrency2(e.target.value)}
            />
            <Input value={value2} onChange={(e) => setValue2(e.target.value)} />
          </div>
        </div>
        <Calculate
          value1={value1}
          value2={value2}
          currencyRates={currencyData?.conversion_rates}
          selectedCurrency1={selectedCurrency1}
          selectedCurrency2={selectedCurrency2}
          onCalculate={handleCalculate}
        />
      </div>
    </Fragment>
  );
};

export default MainContent;
