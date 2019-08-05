import React, { Component } from "react";
import CurrencyCard from "./CurrencyCard";

class CurrenciesListCards extends Component {
    render() {
        const { rates = {} } = this.props;

        return <div style={{
            display: "flex", 
            justifyContent: "space-between",
            flexWrap: "wrap" 
        }}>
            {
                Object.keys(rates).map((currency, index) => 
                    <CurrencyCard key={index} name={currency} rate={rates[currency]} />)          
            }
        </div>
    }
}

export default CurrenciesListCards;