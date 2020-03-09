import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState(0);
  const [fromVal, setFromVal] = useState(0);
  const [toVal, setToVal] = useState(0);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("USD");

  useEffect(() => {
    setResult(fromVal * toVal);
  }, [toVal, fromVal]);

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://api.exchangeratesapi.io/latest?base=${fromCurr}`;
      const res = await fetch(url);
      const data = await res.json();
      setToVal(parseFloat(data.rates[toCurr]));
    };
    fetchData();
  }, [fromCurr, toCurr]);

  const baseCurrency = curr => {
    setFromCurr(curr);
  };

  const convertCurrency = curr => {
    setToCurr(curr);
  };

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
        <option value="ILS">ILS</option>
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
        <option value="ILS">ILS</option>
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
