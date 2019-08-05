import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import CurrencyCard from "./CurrencyCard";

class CurrenciesListCards extends Component {
    render() {
        const { rates = {}, baseCurrency } = this.props;

        return <Card.Group centered >
            {
                Object.keys(rates)
                    .filter(currency => currency !== baseCurrency)
                    .map((currency, index) => 
                        <CurrencyCard key={index} baseCurrency={baseCurrency} name={currency} rate={rates[currency]} />)          
            }
        </Card.Group>
    }
}

export default CurrenciesListCards;