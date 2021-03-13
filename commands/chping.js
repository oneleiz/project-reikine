const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(`${message.createdTimestamp - Date.now()}ms`);
}

module.exports.help = {
  name:"chping"
}

// written by oneleiz | ¯//_