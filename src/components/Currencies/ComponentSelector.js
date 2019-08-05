import React from "react";
import { Select } from "semantic-ui-react";

const ComponentSelector = ({ components, onChange, initialValue }) => {
    return <Select 
        defaultValue={"Table"} 
        options={ components.map(component => ({ key: component, text: component, value: component })) } 
        onChange={ (_, data) => onChange(data.value) }
    />
};

export default ComponentSelector;