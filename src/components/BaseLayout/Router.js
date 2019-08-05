import React from 'react';
import GreetingPage from '../GreetingPage';
import ConverterPage from '../Converter/ConverterPage';
import CurrenciesPage from '../Currencies/CurrenciesPage';
import { Route } from "react-router-dom";

const Router = () => (
    <>
        <Route path="/" exact component={GreetingPage} />
        <Route path="/converter" component={ConverterPage} />
        <Route path="/currencies" component={CurrenciesPage} />
    </>
);

export default Router;