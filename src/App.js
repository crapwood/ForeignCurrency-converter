import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [fromVal, setFromVal] = useState(0);
  const [toVal, setToVal] = useState(0);

  useEffect(() => {
    setResult(fromVal * toVal);
  }, [toVal, fromVal]);

  return (
    <>
      <select
        onChange={e => {
          baseCurrency(e.target.value);
        }}
      >
        <option selected value="USD">
          USD
        </option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="NIS">NIS</option>
        <option value="PHP">PHP</option>
      </select>
      <input
        onChange={e => {
          setFromVal(e.target.value);
        }}
        value={fromVal}
        type="number"
      />
      <strong>TO</strong>
      <select
        onChange={e => {
          convertCurrency(e.target.value);
        }}
      >
        <option selected value="USD">
          USD
        </option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="NIS">NIS</option>
        <option value="PHP">PHP</option>
      </select>
      <input
        onChange={e => {
          setToVal(e.target.value);
        }}
        value={toVal}
        type="number"
      />
      <h3>{result}</h3>
    </>
  );
}

export default App;
