const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return
    if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Eu não tenho a permissão `ADMINISTATOR`, estão descarte este comando, ou ative!!!!");
    message.delete().catch(O_o=>{});
    if (!args[0]) {
        message.reply(":x: **Use:** !anuncio (msg)");
        return;
    };
    var args1 = message.content.split(" ").slice(1).join(" ");
    if (!args1) return message.reply(":x: Digite !anuncio para saber mais");
    message.channel.send('@everyone').then(a=>a.delete(1));
    var role = message.guild.roles.find('name', 'Dream'); //Altera esse Dream caso altere o nome :D
    const embed1 = new Discord.RichEmbed()
  .setAuthor('Anúncio:', "https://cdn.discordapp.com/emojis/450112878108999680.gif?v=1")
  .setDescription(`${args1}`)
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Anúncio por: ${message.author.username}`, message.author.avatarURL)
  return message.channel.send({embed: embed1}); 
}
module.exports.help = {
    name: "anuncio"
    }