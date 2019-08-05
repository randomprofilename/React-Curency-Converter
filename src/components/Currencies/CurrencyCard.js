import React from "react";
import { Card } from 'semantic-ui-react';

const CurrencyCard = ({ name, rate }) =>
    <Card header={name} meta={rate} />

export default CurrencyCard;