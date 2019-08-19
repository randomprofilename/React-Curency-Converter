import React, { Component } from "react";
import { Input, Loader, Segment, Icon, Grid, Dropdown } from "semantic-ui-react";
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
    return <Input 
      label={<Dropdown
        selection
        search 
        compact
        defaultValue={baseCurrency} 
        options={currencies.map(currency => ({ key: currency,  text: currency, value: currency }))}
        onChange={(_, data) => this.onBaseCurrencyChange(data.value)}
      />}
      fluid
      type="number" 
      defaultValue={baseAmount} 
      onChange={e => this.onBaseAmountChange(e.target.value)}
    />
  }

  renderTargetData(targetAmount, targetCurrency, currencies) {
    return <Input 
      label={<Dropdown
        selection
        search 
        compact
        defaultValue={targetCurrency} 
        options={currencies.map(currency => ({ key: currency,  text: currency, value: currency }))}
        onChange={(_, data) => this.onTargetCurrencyChange(data.value)}
      />} 
      labelPosition="right"
      fluid
      type="number" 
      value={targetAmount}
    />
  }

  render() {
    const { isLoading, baseAmount, baseCurrency, targetAmount, targetCurrency, currencies } = this.state;
    if (isLoading) 
        return <Loader active />

    return <Segment>
      <Grid stackable centered columns={3}>
        <Grid.Column floated="left" >
          {this.renderBaseData(baseAmount, baseCurrency, currencies)}
        </Grid.Column>
        <Grid.Column verticalAlign="middle" width={1} >
          <Icon disabled size="large" name="angle double right" />
        </Grid.Column>
        <Grid.Column floated="right">
          {this.renderTargetData(targetAmount, targetCurrency, currencies)}
        </Grid.Column>
      </Grid>
    </Segment>
  }
};

export default ConverterTile;