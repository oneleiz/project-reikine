const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const cmdsembed = new Discord.MessageEmbed()
      .setTitle('Commands')
      .setColor('FF0000')
      .setDescription('```about, credits, cmd, help, ping, chping, say, calc, weather, scalc```');
    message.channel.send(cmdsembed);
  }

module.exports.help = {
name:"cmds"

}

// written by oneleiz | ¯//_