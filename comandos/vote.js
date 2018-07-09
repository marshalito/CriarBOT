exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRADOR")) return;
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return;
    let la = message.content.split(" ").slice(1).join(" ");
    if(!la) return message.channel.send(":x:**|**Me dê o que você quer colocar em votação!");
    message.delete(O_o=>{});
    const Discord = require('discord.js');
    var embed1 = new Discord.RichEmbed()
        .setAuthor("VOTAÇÃO!")
        .setDescription(`\n
${la}`)
        .setColor('RANDOM')
        .setTimestamp();
    message.channel.send({embed: embed1}).then(msg=> {
        msg.react('👎');
        msg.react('👍');
    });
}
module.exports.help = {
    name: "enquete"
    }