const Discord = require("discord.js");
const weather = require("weather.js")

module.exports.run = async (bot, message, args, weather) => {
  const city = args[0] 
  weather.find({search: args.join(" "), degreeType: "C"}, function(error, result){
  
  if (error) return message.channel.send(error);
  if (!city) return message.channel.send('invalid place');
  
  if (result === undefined || result.length === 0 ) return message.channel.send('specify a place')

  let current = result[0].current
  let location = result[0].location

  const embed = new Discord.MessageEmbed()
   .setTitle(`weather info for ${current.observationpoint}`)
   .setDescription(current.skytext)
   .setColor('FF0000')
   .setTimestamp()
   .addField('temperature =', current.temperature, true)
   .addField('wind speed =', current.winddisplay, true)
   .addField('humidity =', `${current.humidity}%`, true)
   .addField('timezone =', location.timezone, true)
   
   message.channel.send(embed)

  })
}


module.exports.help = {
  name:"weather"
}