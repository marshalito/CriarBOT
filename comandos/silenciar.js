const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

  //!tempmute @user 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Usuário não encontrado.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Permissões insuficientes para punir este membro.");
  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Especifique o tempo de duração da punição.");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> foi silenciado com sucesso!`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> não está mais silenciado.`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "silenciar"
}
