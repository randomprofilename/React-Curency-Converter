import React, { Component } from "react";
import CurenciesListTable from "./CurrenciesListTable";
import CurenciesListCards from "./CurrenciesListCards";
import CurrencySelector from "./CurrencySelector";
import ComponentSelector from "./ComponentSelector";
import { getLatest } from "../../api/ratesApi";
import { Segment, Loader } from "semantic-ui-react";
import { getAll } from "../../api/countriesApi";

class CurenciesPage extends Component {
  state = { 
    isLoading: true,
    baseCurrency: "USD",
    currencies: [],
    rates: {},
    components: [ "Cards", "Table" ],
    baseComponent: "Cards",
    countries: {}
  };
    
  async componentDidMount() {
    await this.getExternalData()
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.baseCurrency === this.state.baseCurrency)
      return;
    await this.getExternalData();
  }

  async getExternalData() {
    const { baseCurrency, countries } = this.state;
    const { rates } = await this.loadRates(baseCurrency);
    if (Object.keys(countries).length !== 0)
      return this.setState({ rates, currencies: Object.keys(rates), isLoading: false });

    const countriesArray = await this.getcountries();
    const currencyCodes = Object.keys(rates);
    const countryByCurrencyCode = currencyCodes.reduce((acc, currencyCode) => {
      const country = countriesArray.find(country => 
        country.alpha3Code !== "ATA" 
        && 
        country.currencies.some(currency => currency.code && currency.code.toUpperCase() === currencyCode.toUpperCase()));
      return { ...acc, [currencyCode]: country ? country : undefined };
    }, {});
    
    
    this.setState({ rates, currencies: Object.keys(rates), isLoading: false, countries: countryByCurrencyCode });
  }

  async getcountries() {
    return await getAll();
  }

  async loadRates(baseCurrency) {
    return await getLatest(baseCurrency);
  }

  onCurrencyChanged = currency => this.setState({ baseCurrency: currency, isLoading: true });

  onComponentChanged = component => this.setState({ baseComponent: component });

  renderCurrenciesList = () => {
    const { baseComponent, baseCurrency, rates, countries } = this.state;
    
    switch (baseComponent) {
      case "Table":
        return <CurenciesListTable rates={rates} countries={countries} />;
      case "Cards":
        return <CurenciesListCards baseCurrency={baseCurrency} rates={rates} countries={countries} />;
      default:
        console.log("Something bad");
    }
  }
    
  render() {
    return <>
      <Segment>
        <h1> CurrenciesPage </h1>
      </Segment>
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
        {this.state.isLoading 
          ? <Loader active/> 
          : this.renderCurrenciesList()
        }
      </Segment>
    </>
  }
};

export default CurenciesPage;