import React from "react";
import { Table } from "semantic-ui-react";

const CurrenciesList = props => {
  const { rates = {} } = props;

  return <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Currency</Table.HeaderCell>
        <Table.HeaderCell>Rate</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(rates).map((currency, index) => 
        <Table.Row key={index}> 
          <Table.Cell>{currency}</Table.Cell> 
          <Table.Cell>{rates[currency]}</Table.Cell> 
        </Table.Row>)          
      }
    </Table.Body>
  </Table>
};

export default CurrenciesList;