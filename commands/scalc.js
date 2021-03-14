const Discord = require("discord.js");

module.exports.run = async (bot, message, args,) => { 
  var given = args.join(" ");
  if (given) {
    var equal = parseFloat(given)
    return message.channel.send(equal)
  } else if (!given) {
      return message.channel.send('specify an operation')
  } else return message.channel.send('invalid operation')
} 

module.exports.help = {
  name:"scalc"
}

// written by oneleiz | ¯//_