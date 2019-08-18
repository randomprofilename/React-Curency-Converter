import React from "react";
import { Card } from 'semantic-ui-react';

const CurrencyCard = ({ baseCurrency, name, rate }) => (
  <Card header={`${rate} ${name}`} meta={`1 ${baseCurrency}`} />
);

export default CurrencyCard;