const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    if (!message.guild.member(message.author).hasPermission("SEND_MESSAGES")) return
	if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.reply(":x: Eu não tenho a permissão `ADMINISTATOR`, estão descarte este comando, ou ative!!!!");
	
    var role = message.guild.roles.find('name', 'Dream'); //Altera esse Dream caso altere o nome :D
    const embed1 = new Discord.RichEmbed()
  .setDescription('Au, au! :dog:')
  .setImage("https://random.dog/8811-17451-16018.jpg")
  .setColor(role.color)
  .setTimestamp()
  .setFooter(`Doguinho por: ${message.author.username}`, message.author.avatarURL)
  message.member.send({embed: embed1}); 
  message.channel.send(`Olá, se você está aqui é porque foi aprovado no nosso formulário.
Não espalhe para ninguém que você está aqui e não fale no chat sem ser autorizado, apenas superiores podem falar aqui. Caso quebre alguma regra do servidor ou desse chat, você será retirado imediatamente e não poderá voltar.
Caso tenha alguma dúvida, pergunte para qualquer Administrador, eles os ajudarão.`)
}
module.exports.help = {
    name: "enviarmsg"
    }