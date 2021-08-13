/* eslint-disable no-console */
import fetch from 'node-fetch';

const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?';

// const tickers = ['bitcoin', 'ethereum', 'terra-luna', 'solana', 'binancecoin'];

const options = {
  method: 'GET',
  qs: {
    // ids: tickers.toString(),
    // vs_currencies: "usd",
    localization: 'false',
  },
};

async function getCryptoPrices() {
  let prices;
  const queryParams = new URLSearchParams(options.qs);
  try {
    const response = await fetch(url + queryParams);
    if (!response.ok) {
      console.log(response);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    prices = await response.json();
  } catch (exception) {
    console.log(exception);
  }
  return prices;
}

export default getCryptoPrices;
