import React from "react";
import { Card } from "semantic-ui-react";
import CurrencyCard from "./CurrencyCard";

const CurrenciesListCards = props => {
  const { rates = {}, baseCurrency, countries = {} } = props;

  return <Card.Group centered >
    {Object.keys(rates)
      .filter(currency => currency !== baseCurrency)
      .map((currency, index) => <CurrencyCard key={index} baseCurrency={baseCurrency} name={currency} rate={rates[currency]} country={countries[currency]} />)          
    }
  </Card.Group>
};

export default CurrenciesListCards;