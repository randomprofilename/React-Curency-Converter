const axios = require("axios");

const ratesApi = axios.create({ baseURL: "https://api.ratesapi.io/api" });

const getLatest = async (baseCurrency, currencies) => {
    const { data } = await ratesApi.get("/latest", { params: { base: baseCurrency, symbols: currencies } });
    return data;
};

export { ratesApi, getLatest };