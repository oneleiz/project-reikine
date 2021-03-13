const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const cmdsembed = new Discord.MessageEmbed()
      .setTitle('Commands')
      .setColor('FF0000')
      .setDescription('```!!cmds, !!about, !!ping, !!chping, !!say, !!calc```');
    message.channel.send(cmdsembed);
  }

module.exports.help = {
name:"cmds"
}

// written by oneleiz | ¯//_