export default {
  prefix: process.env.PREFIX,
  token: process.env.BOT_TOKEN,
  clientID: process.env.CLIENT_ID,
  discordServerID: process.env.DISCORD_SERVER_ID,
  trackPriceOf: process.env.TRACK_PRICE_OF,
  CryptoTokenIDs: [
    'bitcoin',
    'ethereum',
    'terra-luna',
    'bnb',
    'solana',
    'dogecoin',
  ],
};
