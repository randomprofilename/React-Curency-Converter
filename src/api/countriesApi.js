const axios = require("axios");

const countriesApi = axios.create({ baseURL: "https://restcountries.eu/rest/v2" });

const getAll = async () => {
  const { data } = await countriesApi.get("/all");
  return data;
};

const getByCurrency = async (currencyCode = "") => {
  const { data } = await countriesApi.get(`/currency/${currencyCode}`);
  return data;
};
export { countriesApi, getAll, getByCurrency };