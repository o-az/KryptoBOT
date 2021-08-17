import { Client, Intents } from 'discord.js';
import config from './discord-config.js';
import getCryptoPrices from './ticker-prices.js';
import {
currency } from './utils/formatters.js';

const BOT_ID = config.clientID;
const SERVER_ID = config.discordServerID;
const CRYPTO_TOKEN = config.trackPriceOf;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
});

client.once('ready', () => {
  console.log('We on . . .');

  const guild = client.guilds.cache.get(SERVER_ID);
  const BOT = guild.members.cache.get(BOT_ID);

  setInterval(async () => {
    const cryptoTicker = await getCryptoPrices();
    const tokenPrice = cryptoTicker[CRYPTO_TOKEN].usd;
    const tokenMarketcap = cryptoTicker[CRYPTO_TOKEN].usd_market_cap;

    BOT.setNickname(`${currency(tokenPrice)} USD`);

    client.user.setActivity(`Mcap=${currency(tokenMarketcap)}`, {
      type: 'WATCHING',
    });
  }, 8000);
});

client.login(config.token);
