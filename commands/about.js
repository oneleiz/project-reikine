const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const helpembed = new Discord.MessageEmbed()
      .setTitle('Reikine | A utility bot developed by oneleiz')
      .setColor('FF0000')
      .setDescription('Hello, my name is Reikine! I currently serve no purpose for now. In the meantime, you can check the available commands I can provide! ```!!commands```');
    message.channel.send(helpembed);
  }

module.exports.help = {
name:"about"
}

// written by oneleiz | ¯//_