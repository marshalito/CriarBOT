exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRADOR")) return;
    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return;
    let la = message.content.split(" ").slice(1).join(" ");
    if(!la) return message.channel.send("Insira o conteúdo da enquete para que ela possa ser feita!");
    message.delete(O_o=>{});
    const Discord = require('discord.js');
    message.channel.send('@everyone').then(a=>a.delete(1));
    var embed = new Discord.RichEmbed()
        .setAuthor("📋 ENQUETE!")
        .setDescription(`${la}`)
        .setColor(role.color)
        .setTimestamp();
        .setFooter(`Enquete por: ${message.author.username}`, message.author.avatarURL)
    message.channel.send({embed: embed}).then(msg=> {
        msg.react('👎');
        msg.react('👍');
    });
}
module.exports.help = {
    name: "enquete"
    }
