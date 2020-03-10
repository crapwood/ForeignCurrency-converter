import React from "react";
import Form from "react-bootstrap/Form";

const SelectInput = props => {
  const { currency, setVal, value } = props;

  return (
    <>
      <Form
        style={{ width: 80 + "px" }}
        onChange={e => {
          currency(e.target.value);
        }}
      >
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select">
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