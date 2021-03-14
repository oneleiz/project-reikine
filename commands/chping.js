const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send(`${Math.round(parseFloat(bot.ws.ping))}ms`);
}

module.exports.help = {
  name:"chping"
}

// written by oneleiz | ¯//_