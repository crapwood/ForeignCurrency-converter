import React from "react";
import Form from "react-bootstrap/Form";

const SelectInput = props => {
  const { currency, setVal, value } = props;

  return (
    <>
      <Form
        style={{ marginTop: 10 + "px" }}
        onChange={e => {
          currency(e.target.value);
        }}
      >
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            as="select"
            style={{ background: "black", color: "white" }}
          >
            <option selected value="USD">
              USD
            </option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="ILS">ILS</option>
            <option value="PHP">PHP</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </>
  );
};

export default SelectInput;
