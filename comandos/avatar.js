module.exports.run = async(client, message, args) => {
    const Discord = require('discord.js');
    let player = message.mentions.users.first() || message.author;
    let avatar = new Discord.RichEmbed()
    .setAuthor('Avatar de '+player.username)
    .setImage(player.displayAvatarURL)
    .setColor("#ff4402")
    .setFooter("Comando por: " + message.author.username, player.displayAvatarURL);

    message.channel.send({embed: avatar});
}

module.exports.help = {
    name: "avatar"
}