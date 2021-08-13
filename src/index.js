/* eslint-disable no-console */
import { Client, Intents } from 'discord.js';
import 'dotenv/config';
import config from './discord-config.js';
import getCryptoPrices from './ticker-prices.js';
import { currency } from './utils/formatters.js';

const BOT_ID = config.bot_user_id;
const SERVER_ID = config.discord_server_ID;

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

const cryptoTicker = await getCryptoPrices();

client.once('ready', () => {
  console.log('We on . . .');

  const guild = client.guilds.cache.get(SERVER_ID);
  const BOT = guild.members.cache.get(BOT_ID);

  const BtcPrice = cryptoTicker.market_data['current_price'].usd;
  const BtcMarketcap = cryptoTicker.market_data['market_cap'].usd;

  setInterval(() => {
    BOT.setNickname(`${currency(BtcPrice)} USD`);
  }, 2000);

  setInterval(() => {
    client.user.setActivity(`MCap=${currency(BtcMarketcap)}`, {
      type: 'WATCHING',
    });
  }, 2000);
});

client.login(config.token);
