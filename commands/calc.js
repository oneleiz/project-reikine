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

  } else if (args[1] === "%") {
      var equal = parseFloat(args[0]) % parseFloat(args[2]);
    return message.channel.send(equal);

  } else if (args[1] === "rnd") {
      var equal = Math.floor(Math.round(parseFloat(given)))
    return message.channel.send(equal)

  } else if (args[1] === "sqrt") {
      var equal = Math.floor(Math.sqrt(parseFloat(given)))
      return message.channel.send(equal)

  } else if (!given) { return message.channel.send('specify an operation eg. (1 + 2)')
  } else if (args[3]) { return message.channel.send('cannot compute multiple arguments at once')
  } else return message.channel.send('invalid operation')

} 

module.exports.help = {
  name:"calc"
}

// written by oneleiz | ¯//_