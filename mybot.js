var Discord = require("discord.js")

var bot = new Discord.Client();

bot.on("message", function(message)
{
    var input = message.content.toUpperCase();
    if(input === "HI" && role.hasPermission("voiceMoveMembers"))
        {
            
        bot.reply(message, "Hey There!");

        }
        if(input === "!HELP")
        {
            
        bot.sendMessage(message, "Commands: unavalible");

        }
        if(input === "!PRESENT")
        {
            
        bot.sendMessage(message, bot.author);

        }
    if(input === "!BYE")
        {
        bot.reply(message, "Bye for now!");
        }

});

bot.login("contact@code8technologies.com", "CHECK_DISCORD");