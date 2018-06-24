const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Permissões insuficientes.");
    
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply ("você deve mencionar algum usuário!");
    var role = message.guild.roles.find('name', 'Dream'); //Altera esse Dream caso altere o nome :D
    const embed1 = new Discord.RichEmbed()
  .setDescription(`:kissing_heart: **${message.author.username} enviou um beijo para ${user}.**`)
  .setImage("https://i.imgur.com/eyJifvl.gif")
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "beijo"
    }