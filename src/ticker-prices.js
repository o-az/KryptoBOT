import fetch from 'node-fetch';
import config from './discord-config.js';

const coingeckoQueryParams = {
  ids: config.CryptoTokenIDs,
  vs_currencies: 'usd',
  include_market_cap: true,
};

const url = 'https://api.coingecko.com/api/v3/simple/price?';

async function getCryptoPrices() {
  let prices;
  const queryParams = new URLSearchParams(coingeckoQueryParams);
  try {
    const response = await fetch(url + queryParams);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}, \n${response}`);
    }
    prices = await response.json();
  } catch (exception) {
    return exception;
  }
  return prices;
}

export default getCryptoPrices;
