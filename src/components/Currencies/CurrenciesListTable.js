import React from "react";
import { Table, Image } from "semantic-ui-react";

const CurrenciesList = props => {
  const { rates = {}, countries = {} } = props;

  return <Table celled>
    <Table.Header>
      <Table.Row style={{ textAlign: "center" }} >
        <Table.HeaderCell>Currency</Table.HeaderCell>
        <Table.HeaderCell>Country Name</Table.HeaderCell>
        <Table.HeaderCell>Flag</Table.HeaderCell>
        <Table.HeaderCell>Rate</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {Object.keys(rates).map((currency, index) => 
        <Table.Row key={index}>
          <Table.Cell>{currency}</Table.Cell> 
          <Table.Cell>{countries[currency].name}</Table.Cell> 
          <Table.Cell> <Image centered size="mini" src={countries[currency].flag} /></Table.Cell>
          <Table.Cell>{rates[currency]}</Table.Cell> 
        </Table.Row>)          
      }
    </Table.Body>
  </Table>
};

export default CurrenciesList;