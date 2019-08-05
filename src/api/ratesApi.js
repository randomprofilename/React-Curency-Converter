const axios = require("axios");

const ratesApi = axios.create({ baseURL: "https://api.ratesapi.io/api" });

const getLatest = (baseCurrency, currencies) =>
    ratesApi.get("/latest", { params: { base: baseCurrency, symbols: currencies } });

export { ratesApi, getLatest };