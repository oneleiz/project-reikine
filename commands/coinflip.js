const Discord = require("discord.js");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.run = async (bot, message, args) => {
    var side = getRandomInt(1)
    if (side === 0) {
        return message.channel.send('heads');
    } else if (side === 1) {
        return message.channel.send('tails');
    } 
}

module.exports.help = {
  name:"coinflip"
}