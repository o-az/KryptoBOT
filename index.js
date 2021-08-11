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

client.once("ready", () => {
  console.log("We on . . .");
});

client.on("message", (message) => {
  //console.log(message.content);
  if (message.content === "!") {
    const members = message.guild.members.cache;
    const bot = members.get(BOT_ID);
    message.channel.send("rt");

    getCryptoPrices().then((crypto_prices) =>
      bot.setNickname(crypto_prices["bitcoin"].usd)
    );
  }
});

client.login(config.token);
