const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (args.join(' ') === "help") {
        const embedAA = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('really? do i honestly need an explanation for this?\n usage: !!help [command]')
        return message.channel.send(embedAA)
    } else if (args.join(' ') === "cmds") {
        const embedAB = new Discord.MessageEmbed()
            .setColor('FF0000')  
            .setDescription('cmds (shortened from commands) is a command that lists all commands')
        return message.channel.send(embedAB)
    } else if (args.join(' ') === "ping") {
        const embedAC = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('ping is a command that responds to it with "pong"')
        return message.channel.send(embedAC)
    } else if (args.join(' ') === "about") {
        const embedAD = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('about is a command that shows info about her')
        return message.channel.send(embedAD)
    } else if (args.join(' ') === "credits") {
        const embedAE = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('credits is a command that is mainly just an appreciation command for the people who made this project possible')
        return message.channel.send(embedAE)
    } else if (args.join(' ') === "say") {
        const embedAF = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('say is a command that relays the input of the user by her and deletes the inital input\n usage: !!say [input]')
        return message.channel.send(embedAF)
    } else if (args.join(' ') === "chping") {
        const embedAG = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription(`chping (shortened from checkping) is a command that checks the user's ping`)
        return message.channel.send(embedAG)
    } else if (args.join(' ') === "calc") {
        const embedAH = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription(`calc (shortened from calculator) is a command that allows simple calculation (cannot handle more than two arguments as of now)\n (+ = addition, - = subtraction, * = multiplication, / = division, % = remainder, rnd = rounding, sqrt = square root)\n usage: !!calc [input1] (operator) [input2]`)
        return message.channel.send(embedAH)
    } else if (args.join(' ') === "weather") {
        const embedAI = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('weather is a command that checks the weather condition of a certain place')
        return message.channel.send(embedAI)
    } else if (args.join(' ') === "scalc") {
        const embedAJ = new Discord.MessageEmbed()
            .setColor('FF0000')
            .setDescription('scalc (shortened from scientific calculator) is a command that allows to calculate multiple expressions & irrational numbers')
        return message.channel.send(embedAJ)
    } else if (!args.join(' ')) { 
        const embedZZZ = new Discord.MessageEmbed()
        .setColor('FF0000')
        .setDescription('Reikine, a utility bot\n !!cmds to view the set of commands')
        return message.channel.send(embedZZZ) 
    } else return message.channel.send('invalid command')
        
}

module.exports.help = {
  name:"help"
}

// written by oneleiz | ¯//_