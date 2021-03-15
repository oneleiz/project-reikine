const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const cmdsembed = new Discord.MessageEmbed()
      .setTitle('Commands')
      .setColor('FF0000')
      .setDescription('```about, calc, chping, cmd, coinflip, credits, dice, help, ping, say, scalc, weather```');
    message.channel.send(cmdsembed);
  }

module.exports.help = {
name:"cmds"

}

// written by oneleiz | ¯//_