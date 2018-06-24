const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Eu não tenho a permissão `ADMINISTATOR`, estão descarte este comando, ou ative!!!!");
	
    var role = message.guild.roles.find('name', 'Dream'); //Altera esse Dream caso altere o nome :D
    const embed1 = new Discord.RichEmbed()
  .setDescription('Meow :cat:')
  .setImage("https://purr.objects-us-west-1.dream.io/i/acatttt.jpg")
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Gatinho por: ${message.author.username}`, message.author.avatarURL)
  message.member.send({embed: embed1}); 
  message.reply("um gatinho foi enviado no seu privado. :cat:").then(a=>a.delete(1500));
}
module.exports.help = {
    name: "cat"
    }