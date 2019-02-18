require("dotenv").config();
const Discord = require("discord.js");
const fetch = require("node-fetch");

// creates Client instance
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async msg => {
  // Sets commands that start with '!'
  if (msg.content.substring(0, 1) == "!") {
    let args = msg.content.substring(1).split(" ");
    let cmd = args[0];

    args = args.splice(1);
    switch (cmd) {
      // !ping
      case "status":
        msg.reply("I am here!");
        break;
      case "help":
        const embed = new Discord.RichEmbed({
          title: "Need Help?",
          color: 0xff0000,
          description: "Commands:",
          fields: [
            {
              name: "!status",
              value: "Bot Status!"
            },
            {
              name: "!imgur <query>",
              value: "Search for an image on Imgur"
            }
          ]
        });

        msg.channel.send(embed);
        break;
      case "ask":
        let question = args.join(" ");
        const replies = ["yes", "no", "hm", "we lost bois", "oof"];
        const randomReply = length => {
          return replies[Math.floor(Math.random() * Math.floor(length))];
        };
        debugger;
        if (question.indexOf("?") >= 1) {
          msg.reply(randomReply(replies.length));
        } else {
          msg.reply("I don't understand the fuck you're saying.");
        }
        break;
      case "imgur":
        let q = args[1];
        // Fetch image from Imgur API
        const options = {
          method: "GET",
          headers: {
            "Postman-Token": process.env.POSTMAN_TOKEN,
            "cache-control": "no-cache",
            Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`
          }
        };

        try {
          const req = await fetch(
            `https://api.imgur.com/3/gallery/search/?q=${q}`,
            options
          );
          const res = await req.json();

          function getRandom(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }

          let _data = res.data[getRandom(res.data.length)];
          let _gif = _data.images[getRandom(_data.images.length)].link;
          let parsedGif = new Discord.Attachment(_gif);
          msg.reply(parsedGif);
        } catch (err) {
          console.log("Error occured: ", err);
          msg.channel.send(
            new Discord.RichEmbed({
              title: "Your search returned empty!",
              description: "eg. !imgur <your search>"
            })
          );
        }
        break;
    }
  }
});
client.login(process.env.DISCORD_SECRET);
