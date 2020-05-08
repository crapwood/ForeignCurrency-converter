import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Currency from "./components/Currency";
import InputValue from "./components/InputValue";

function App() {
  const [result, setResult] = useState(0);
  const [fromVal, setFromVal] = useState(0);
  const [toVal, setToVal] = useState(0);
  const [fromCurr, setFromCurr] = useState("USD");
  const [toCurr, setToCurr] = useState("USD");

  useEffect(() => {
    let result = fromVal * toVal;
    setResult(result.toFixed(2));
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

  return (
    <div className="app-container">
      <h1>Foreign Exchange Rates</h1>
      <div className="row-container">
        <Currency currency={setFromCurr} setVal={setFromVal} value={fromVal} />
        <InputValue setVal={setFromVal} value={fromVal} />
        <Currency currency={setToCurr} setVal={setToVal} value={toVal} />
        <InputValue setVal={setToVal} value={toVal} />
      </div>
      <h3>
        {fromVal} {fromCurr} is {result} in {toCurr}
      </h3>
    </div>
  );
}

export default App;
