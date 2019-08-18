import React from "react";
import { Select } from "semantic-ui-react";

const ComponentSelector = ({ components, onChange, initialValue }) => (
  <Select 
    defaultValue={initialValue} 
    options={components.map(component => ({ key: component, text: component, value: component }))} 
    onChange={(_, data) => onChange(data.value)}
  />
);

export default ComponentSelector;