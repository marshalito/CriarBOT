const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return message.channel.send("Permissões insuficientes."); 
  const msg = new Discord.RichEmbed()
      .setTitle(':joy: Memes')
      .addField("!memecopa", 'Memes da Copa.')
      .addField("!memegeral", 'Memes gerais.')
      .setColor('#dcf442');
      message.channel.send({ embed : msg });
}
module.exports.help = {
  name: "memes"
}