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
    <>
      <div
        className="app-container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: 100 + "vh",
          justifyContent: "center",
          alignItems: "center",
          background: "#009FFF" /* fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to right, #ec2F4B, #009FFF)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to right, #ec2F4B, #009FFF)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
      >
        <h1>Foreign Exchange Rates</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <SelectInput
            currency={setFromCurr}
            setVal={setFromVal}
            value={fromVal}
          />
          <input
            style={{
              color: "white",
              background: "black",
              margin: 10 + "px",
              borderRadius: 7 + "px",
              borderColor: "black",
              outline: "none"
            }}
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
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <SelectInput currency={setToCurr} setVal={setToVal} value={toVal} />
          <input
            style={{
              color: "white",
              background: "black",
              margin: 10 + "px",
              borderRadius: 7 + "px",
              borderColor: "black",
              outline: "none"
            }}
            onChange={e => {
              setToVal(e.target.value);
            }}
            value={toVal}
            input
            type="text"
            pattern="[0-9]*"
          />
        </div>

        <h3>
          {fromVal} {fromCurr} is {result} in {toCurr}
        </h3>
      </div>
    </>
  );
}

export default App;
