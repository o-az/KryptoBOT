import { Client, Intents } from "discord.js";
import "dotenv/config";
import config from "./discord-config.js";
import getCryptoPrices from "./ticker-prices.js";

console.log(config);

const BOT_ID = config.bot_user_id;

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    //Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

export const timePerids = {
  millisecond: 1,
  second: 1 * 1000,
  minute: 1 * 1000 * 60,
  hour: 1 * 1000 * 60 * 60,
  day: 1 * 1000 * 60 * 60 * 24,
};

const currency = function (number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(number);
};

const crypto_ticker = await getCryptoPrices();

client.once("ready", async (event) => {
  console.log("We on . . .");
  client.user.setPresence({ activity: { name: "abcd" } });
  client.channels.fetch("874767980423159831").then((channel) => {
    const members = channel.guild.members.cache;
    const bot = members.get(BOT_ID);
    const BTC_price = currency(crypto_ticker["market_data"].current_price.usd);
    const BTC_market_cap = currency(crypto_ticker["market_data"].market_cap.usd)
    setInterval(
      () => {
        bot.setNickname(`${BTC_price} USD`);
        console.log('logged price---');
      },
      4000
    );
    setInterval(
      () => {

        client.user.setActivity(`MCap=${BTC_market_cap}`, { type: 'WATCHING' });
        console.log('logged mcap---');
      },
      4000
    );
  });
});

client.login(config.token);
