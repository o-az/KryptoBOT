<div style="text-align: center;">
<img alt="Lines of code" src="https://s3.aws-k8s.generated.photos/ai-generated-photos/upscaler-uploads/343/b8cc5902-f216-46fe-b394-83028ff0ed2a.png">
</div>
<!-- <div style="text-align: center;">
<img alt="Lines of code" src="https://img.shields.io/tokei/lines/github/omar-aziz/kryptobot">
</div> -->

---

### A simple, easy to setup, Discord cryptocurrency price tracking tool. It works by periodically updating your bot's nickname with live price. You can track price of any cryptocurrency you want, as long as it's listed on [coingecko](https://coingecko.com 'coingecko').

<div style="text-align: center;">
<img src="https://media4.giphy.com/media/LGeZInqJeW24CCKs6D/giphy.gif?cid=790b761135c71de6ecd715b85bcc0a87a8accf565b8fcb18&rid=giphy.gif&ct=g" alt="demo_02" width="480">
</div>

### Setup

1. Clone the repo:

   `git clone https://github.com/Omar-Aziz/KryptoBOT`

2. Rename the `.env.example` file to `.env` and update the file with your keys:
   ```
   PREFIX=!
   CLIENT_ID=your-discord-client-id
   BOT_TOKEN=your-discord-bot-token
   DISCORD_SERVER_ID=your-discord-server-id
   TRACK_PRICE_OF=dogecoin
   ```
3. Set the value of `TRACK_PRICE_OF` to whatever token you want to track the
   price of,

4. Add your bot to your Discord server,

5. Install dependencies:&nbsp;&nbsp;`npm install`

6. Run the process:

   for development:&nbsp;&nbsp;`npm run dev`

   for production, first install [pm2](https://github.com/Unitech/pm2), then run:

   `npm install pm2 -g`

   `npm start`

#### Creating a Discord bot: [Guide](https://discord.com/developers/applications 'Guide')

#### Adding your bot to servers: [Guide](https://discordjs.guide/preparations/adding-your-bot-to-servers.html)

Have any recommendations or see any issues? Feel free to open an issue and I'll take a look as soon as I can.
