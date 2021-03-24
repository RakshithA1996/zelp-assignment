import React from "react";
import { CountryWrap } from "../styles/CountryStyle";

export default function CountrySelect(props) {
  const dataArr = [
    { id: 0, currency: "United States Dollar", currencyCode: "USD" },
    { id: 1, currency: "British Pound Sterling", currencyCode: "GBP" },
    { id: 2, currency: "Euro", currencyCode: "EUR" },
  ];

  return (
    <CountryWrap>
      <div className="head">1 Bitcoin Equals</div>
      <select className="select" onClick={props.setCurrency}>
        {dataArr.map((data, index) => {
          return (
            <option key={index} id={data.id} value={data.currencyCode}>
              {data.currency}
            </option>
          );
        })}
      </select>
      <div className="details">
        {props.details && props.details.rate}{" "}
        {props.details && props.details.description}
      </div>
    </CountryWrap>
  );
}
