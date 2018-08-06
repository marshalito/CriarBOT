const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("permissões insuficientes.");
    
    var reason = message.content.split(" ").slice(1).join(" ");
    const embed1 = new Discord.RichEmbed()
  .setDescription(`:couple: **${message.author.username} deu um abraço apertado em ${reason}.**`)
  .setImage("https://cdn.discordapp.com/attachments/402247919782330369/457661627492204544/hug.gif")
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "abraço"
    }
