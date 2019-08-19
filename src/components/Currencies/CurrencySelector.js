import React from "react";
import { Select } from "semantic-ui-react";

const CurrencySelector = ({ currencies, onChange, initialValue }) => (
  <Select
    style={{ maxWidth: "250px" }} 
    fluid
    defaultValue={initialValue} 
    options={currencies.map(currency => ({ key: currency,  text: currency, value: currency }))}
    onChange={(_, data) => onChange(data.value)}
  />
);

export default CurrencySelector;