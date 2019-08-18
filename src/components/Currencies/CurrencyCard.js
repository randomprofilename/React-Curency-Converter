import React from "react";
import { Card, Image } from 'semantic-ui-react';

const CurrencyCard = ({ baseCurrency, name, rate, country = {} }) => (
  <Card>
    <Card.Content>
      <Image floated="right" size="mini" src={country.flag} />
      <Card.Header>{`${rate} ${name}`}</Card.Header>
      <Card.Meta>{`1 ${baseCurrency}`}</Card.Meta>
    </Card.Content>
    <Card.Content extra description={country.name} />
  </Card>
);

export default CurrencyCard;