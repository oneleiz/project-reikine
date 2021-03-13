const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  var given = args.join(" ");
  if (args[1] === "+") {
    var equal = parseFloat(args[0]) + parseFloat(args[2]);
    return message.channel.send(equal);

  } else if (args[1] === "-") {
    var equal = parseFloat(args[0]) - parseFloat(args[2]);
    return message.channel.send(equal);

  } else if (args[1] === "*") {
    var equal = parseFloat(args[0]) * parseFloat(args[2]);
    return message.channel.send(equal);

  } else if (args[1] === "/") {
    var equal = parseFloat(args[0]) / parseFloat(args[2]);
    return message.channel.send(equal);

  } else if (args[1] === "%")
    var equal = parseFloat(args[0]) % parseFloat(args[2]);
    return message.channel.send(equal);
  
} 

module.exports.help = {
  name:"calc"
}

// written by oneleiz | ¯//_