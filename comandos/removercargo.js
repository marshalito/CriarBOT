const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("**use:** !removercargo <@membro> [cargo].");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifique qual cargo deverá ser removido!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não foi encontrado este cargo.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Este membro não possui este cargo no momento.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`O cargo ${gRole.name} não te pertence mais.`)
  }catch(e){
    message.channel.send(`Removemos o cargo ${gRole.name} de <@${rMember.id}>.`)
  }
}

module.exports.help = {
  name: "removercargo"
}
