const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Permissões insuficientes.");
    
    var reason = message.content.split(" ").slice(1).join(" ");
    var role = message.guild.roles.find('name', 'Dream'); //Altera esse Dream caso altere o nome :D
    const embed1 = new Discord.RichEmbed()
  .setDescription(`:couple: **${message.author.username} deu um abraço apertado em ${reason}.**`)
  .setImage("https://cdn.discordapp.com/attachments/402247919782330369/457661627492204544/hug.gif")
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Comando por: ${message.author.username}`, message.author.avatarURL)
  message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "abraço"
    }