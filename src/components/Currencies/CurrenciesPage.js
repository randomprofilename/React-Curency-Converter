import React, { Component } from "react";
import CurenciesListTable from "./CurrenciesListTable";
import CurenciesListCards from "./CurrenciesListCards";
import CurrencySelector from "./CurrencySelector";
import ComponentSelector from "./ComponentSelector";
import { getLatest } from "../../api/ratesApi";
import { Segment, Loader } from "semantic-ui-react";

class CurenciesPage extends Component {
    state = { 
        isLoading: true,
        baseCurrency: "USD",
        currencies: [],
        rates: {},
        components: [ "Cards", "Table" ],
        baseComponent: "Cards"
    };
    
    async componentDidMount() {
        const { baseCurrency } = this.state;
        await this.loadRates(baseCurrency); 
    }

    async componentDidUpdate(_, prevState) {
        if (prevState.baseCurrency === this.state.baseCurrency)
            return;

        const { baseCurrency } = this.state;
        await this.loadRates(baseCurrency);
    }

    async loadRates(baseCurrency) {
        const { rates } = await getLatest(baseCurrency);
        
        this.setState({ rates, currencies: Object.keys(rates), isLoading: false  });
    }

    onCurrencyChanged = currency => {
        this.setState({ baseCurrency: currency, isLoading: true });
    };

    onComponentChanged = component => {
        this.setState({ baseComponent: component });
    };

    renderCurrenciesList = () =>{
        switch (this.state.baseComponent) {
            case "Table":
                return <CurenciesListTable rates={this.state.rates} />;
            case "Cards":
                return <CurenciesListCards baseCurrency={this.state.baseCurrency} rates={this.state.rates} />;
            default:
                console.log("Something bad");
        }
    }
    

    render() {
        return <>
            <h1> CurrenciesPage </h1>
            <Segment style={{ display: "flex", "justifyContent": "space-between" }} >
                <CurrencySelector 
                    currencies={this.state.currencies} 
                    onChange={this.onCurrencyChanged} 
                    initialValue={this.state.baseCurrency} 
                />
                <ComponentSelector 
                    components={this.state.components}
                    onChange={this.onComponentChanged}
                    initialValue={this.state.baseComponent} 
                />
            </Segment>
            <Segment >
                { this.state.isLoading 
                    ? <Loader active/> 
                    : this.renderCurrenciesList()
                }
            </Segment>
        </>
    }
};

export default CurenciesPage;