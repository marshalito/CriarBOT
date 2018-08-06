const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply("permissões insuficientes.");
    message.delete().catch(O_o=>{});
    if (!args[0]) {
        message.reply("**use:** !anuncio <mensagem>");
        return;
    };
    var args1 = message.content.split(" ").slice(1).join(" ");
    if (!args1) return message.reply("digite !anuncio para saber mais");
    message.channel.send('@everyone').then(a=>a.delete(1));
    const embed1 = new Discord.RichEmbed()
  .setAuthor('Anúncio:')
  .setDescription(`${args1}`)
  .setTimestamp()
  .setFooter(`Autor: ${message.author.username}`, message.author.avatarURL)
  return message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "anuncio"
    }
