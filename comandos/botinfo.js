const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("BOT - Informações")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Nome do bot:", bot.user.username)
    .addField("Criado em:", bot.user.createdAt)
    .setFooter("Caso tenha alguma dúvida, digite !ajuda.");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
