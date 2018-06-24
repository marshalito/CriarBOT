const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  message.delete().catch(o_O=>{});
  if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return null;
  if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return message.reply("Eu não tenho a permissão para banir players!");
  if(!args[0]){
      message.reply("**use:** !ban <player> <motivo>.");
      return;
  }
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply ("você deve mencionar algum usuário!");
  if (!message.guild.member(user).bannable) return message.reply("não posso kickar alguém que tenha um cargo mais acima do que o meu!");
  if (message.author.id === user.id) return message.reply("você não pode se banir.")
  message.guild.member(user).ban();
  message.reply("usuário **banido** com **sucesso**.").then(a=>a.delete(1500));
  let modlog = bot.channels.find("name", "punições");
  if (!modlog) return message.reply("Crie um canal chamado de `punições`, não altere nada do nome.");
  let role = message.guild.roles.find("name", "Dream")
  var embed = new Discord.RichEmbed()
        .setColor(role.color)
        .setDescription(`**Autor:** ${message.author.username}
**Membro punido:** ${user.username}
**Motivo:** ${reason}
**Punição aplicada:** Banimento`)

  modlog.send(embed)
}
module.exports.help = {
  name: "ban"
};