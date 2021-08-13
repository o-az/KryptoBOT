# Token price bot tracker

## Setup

1. Clone
2. Create .env file, add your keys (see .env.example)
3. Add id of token you want to track price of on .env line 5 (e.g., ethereum)
4. Run `npm install`
5. Run `npm run dev` (you can also `npm i pm2` and run `pm2 ./src/index.js`)

## To create a Discord bot

1. Logon to <https://discord.com/developers/applications>,
2. New Application, give your app a name, create,
3. Navigate to "Bot",
4. Add Bot

```.env
PREFIX=!
BOT_TOKEN=discord.com/developers/ > your application > your bot > Click to Reveal Token
USER_ID=discord.com/developers/ your application > APPLICATION ID
DISCORD_SERVER_ID=Discord app > right click on your server > Copy ID
TRACK_PRICE_OF=whatever token you want (e.g., ethereum)
```

Feel free to open an issue should you find any bugs.
