const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let text = args.join(" ");
    message.delete();
    message.channel.send(text);
  }

module.exports.help = {
  name:"say"
}