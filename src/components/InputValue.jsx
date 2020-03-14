import React from "react";

const InputValue = props => {
  const { setVal, value } = props;

  const style = {
    color: "white",
    background: "gray",
    margin: 10 + "px",
    borderRadius: 7 + "px",
    borderColor: "black",
    outline: "none"
  };
  return (
    <input
      style={style}
      onChange={e => {
        setVal(e.target.value);
      }}
      value={value}
      input
      type="text"
      pattern="[0-9]*"
    />
  );
};

export default InputValue;
