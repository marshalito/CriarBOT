const Discord = require('discord.js')
module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return
    if(!args[0]) return message.channel.send("Inclua um número de mensagens que deseja excluir, **entre** **1** e **9**.");
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`${args[0]} mensagem(s) foram **excluídas**.`).then(msg => msg.delete(5000));
    });
}
module.exports.help = {
    name: "limpar"
    }