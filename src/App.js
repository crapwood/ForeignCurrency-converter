import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SelectInput from "./components/SelectInput";

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

  return (
    <>
      <div
        className="app-container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: 100 + "vh",
          justifyContent: "center",
          alignItems: "center",
          background_color: "black"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <SelectInput
            currency={setFromCurr}
            setVal={setFromVal}
            value={fromVal}
          />
          <input
            onChange={e => {
              setFromVal(e.target.value);
            }}
            value={fromVal}
            input
            type="text"
            pattern="[0-9]*"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <SelectInput currency={setToCurr} setVal={setToVal} value={toVal} />
          <input
            // style={{ height: 20 + "px" }}
            onChange={e => {
              setToVal(e.target.value);
            }}
            value={toVal}
            input
            type="text"
            pattern="[0-9]*"
          />
        </div>

        <h3>{result}</h3>
      </div>
    </>
  );
}

export default App;
