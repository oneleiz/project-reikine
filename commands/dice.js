const Discord = require("discord.js");

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

module.exports.run = async (bot, message, args) => {
    var side = getRandomInt(6)
    if (side === 0) {
        return message.channel.send('you rolled a 0');
    } else if (side === 1) {
        return message.channel.send('you rolled a 1');
    } else if (side === 2) {
        return message.channel.send('you rolled a 2');
    } else if (side === 3) {
        return message.channel.send('you rolled a 3');
    } else if (side === 4) {
        return message.channel.send('you rolled a 4');
    } else if (side === 5) {
        return message.channel.send('you rolled a 5');
    } else if (side === 6) {
        return message.channel.send('you rolled a 6');
    }
}

module.exports.help = {
  name:"dice"
}