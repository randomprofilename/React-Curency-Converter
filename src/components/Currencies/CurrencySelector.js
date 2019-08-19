import React from "react";
import { Dropdown } from "semantic-ui-react";

const CurrencySelector = ({ currencies, onChange, initialValue }) => (
  <Dropdown
    style={{ maxWidth: "250px" }} 
    selection
    search
    fluid
    defaultValue={initialValue} 
    options={currencies.map(currency => ({ key: currency,  text: currency, value: currency }))}
    onChange={(_, data) => onChange(data.value)}
  />
);

export default CurrencySelector;