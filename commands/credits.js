const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
        .setTitle('Credits')
        .setColor('FF0000')
        .setDescription('Special thanks to Fam0r, aleksb385 & Panda for making this project possible')
    message.channel.send(embed)
}

module.exports.help = {
  name:"credits"
}