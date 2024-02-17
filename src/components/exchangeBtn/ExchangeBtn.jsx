import React from "react";
import exchangeIcon from "../../assets/img/icon/exchange.svg";
import "./ExchangeBtn.css";

const ExchangeBtn = ({ onClick }) => {
  return (
    <div>
      <button className="exchangeBtn" onClick={onClick}>
        <img src={exchangeIcon} alt="exchange" />
      </button>
    </div>
  );
};

export default ExchangeBtn;
