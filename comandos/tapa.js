const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Permissões insuficientes.");
    
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply ("você deve mencionar algum usuário!");
    var role = message.guild.roles.find('name', 'Dream'); //Altera esse Dream caso altere o nome :D
    const embed1 = new Discord.RichEmbed()
  .setDescription(`**${message.author.username} deu um tapa na cara de ${user}. Quanta violência!** :head_bandage:`)
  .setImage("https://www.intoxianime.com/wp-content/uploads/2017/04/tumblr_ooub8fIHkT1qz64n4o2_400.gif")
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "tapa"
    }