import React, { Component } from "react";
import { Select, Input, Loader, Segment, Icon } from "semantic-ui-react";
import { getLatest } from "../../api/ratesApi";

class ConverterTile extends Component {
  state = {
    isLoading: true,
    currencies: [],
    baseCurrency: null,
    baseAmount: 1,
    targetCurrency: null,
    targetAmount: 0,
    rates: {}
  };
  
  async componentDidMount() {
    const { rates } = await getLatest();
    this.setState({ 
      isLoading: false,
      currencies: Object.keys(rates), 
      baseCurrency: Object.keys(rates)[0], 
      targetCurrency: Object.keys(rates)[1], 
      rates, 
    });
  }

  componentDidUpdate(_, prevState) {
    const { baseAmount, baseCurrency, targetCurrency } = this.state; 
    if (prevState.baseAmount !== baseAmount 
      ||prevState.baseCurrency !== baseCurrency 
      ||prevState.targetCurrency !== targetCurrency   
    )
      this.calculateTargetAmount();
  }

  calculateTargetAmount() {
    const { baseAmount, targetCurrency, rates } = this.state;
    const targetAmount = baseAmount * rates[targetCurrency];
    this.setState({ targetAmount });
  }

  onBaseAmountChange(baseAmount) {
    this.setState({ baseAmount });
  }

  async onBaseCurrencyChange(baseCurrency) {
    const { rates } = await getLatest(baseCurrency);
    this.setState({ rates, baseCurrency });
  }

  onTargetCurrencyChange(targetCurrency) {
    this.setState({ targetCurrency });
  }

  renderBaseData(baseAmount, baseCurrency, currencies) {
    return <div>
      <Select compact
        defaultValue={baseCurrency} 
        options={currencies.map(currency => ({ key: currency,  text: currency, value: currency }))}
        onChange={(_, data) => this.onBaseCurrencyChange(data.value)}
      />
      <Input type="number" defaultValue={baseAmount} onChange={ e => this.onBaseAmountChange(e.target.value) }  />
    </div>
  }

  renderTargetData(targetAmount, targetCurrency, currencies) {
    return <div>
        <Input type="number" value={targetAmount}/>
        <Select compact
          defaultValue={targetCurrency} 
          options={currencies.map(currency => ({ key: currency,  text: currency, value: currency }))}
          onChange={(_, data) => this.onTargetCurrencyChange(data.value)}
        />
    </div>
  }

  render() {
    const { isLoading, baseAmount, baseCurrency, targetAmount, targetCurrency, currencies } = this.state;
    if (isLoading) 
        return <Loader active />

    return <Segment style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
      {this.renderBaseData(baseAmount, baseCurrency, currencies)}

      <Icon.Group size="large">
        <Icon size="big" name="circle outline" />
        <Icon name="angle double right" />
      </Icon.Group>

      {this.renderTargetData(targetAmount, targetCurrency, currencies)}
    </Segment>
  }
};

export default ConverterTile;