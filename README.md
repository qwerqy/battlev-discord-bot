# Battlev Discord Bot

A personal discord bot for my channel. If you want to clone, be sure to change the name of the bot.
The full guide can be seen [here](https://aminroslan.com/posts/how-to-create-a-discord-bot)

## What this bot can do:
1. Get images from Imgur

## Future integrations:
1. Get bot to play audio via Youtube API
2. Integrate memes and gifs

## Get Started

1. Run `npm i`
2. You will need a `Client ID` & `Secret` from Discord. Create a bot via [this guide](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token)
3. Next, you will need a `Refresh Token`, `Client ID` & `Client Secret` from Imgur. Follow their API guide on getting started [here](https://apidocs.imgur.com/#intro)
4. Once you have everything setup, you can initiate your bot by running `node bot.js`.

## Environmental Variable

Setup `.env` file in root of project.
Variables needed: 
- DISCORD_CLIENT_ID
- DISCORD_SECRET
- POSTMAN_TOKEN
- IMGUR_REFRESH_TOKEN
- IMGUR_CLIENT_ID
- IMGUR_CLIENT_SECRET

# Documentation
- [Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)
- [Imgur API](https://apidocs.imgur.com/#intro)
