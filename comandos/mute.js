const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) =>{
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('Comando: +mute')
        .setDescription(`Como usar:\n
**Descrição:** Mutar um player com tempo.
**Modo de usar:** +mute @player <tempo>
**Exemplo:** +mute @zGabrielCodes 3d
**Dica:** Use **s** para segundos, **m** para minutos, **d** para dias.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }
    await message.delete().catch(O_o=>{});
    let player = message.mentions.members.first() //|| message.guild.members.get(args[0]);
    if (!player) return message.reply(":x:**|**Usuário não definido.");
    if (player.id == message.author.id) return;
    if(message.guild.member(player).roles.some(r=>["Master", "Gerente", "Administrador", "Desenvolverdor", "Construtor", "Moderador", "Ajudante"].includes(r.name))) return;
    let role = message.guild.roles.find('name', "Silenciado");
    if (!role){
        message.channel.send(":x: o cargo `Silenciado` não foi identificado, mas como sou avançado crie-o! :relaxed:").then(a => a.delete(1600));
        try {
            role = await message.guild.createRole({
                name: "Silenciado",
                color: "#000000",
                permissions: []
            });
            message.guild.channels.forEach(async (channel, id) =>{
                await channel.overwritePermissions(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTION: false,
                    CONNECT: false
                });
            });
        } catch (a) {
            console.error(a.stack);
        }
    }
    let tempo = message.content.split(" ").slice(2).join(" ");
    if (!tempo) return message.reply(":x:**|**Tempo não indentificado.");
    await(player.addRole(role.id));
    var embed = new Discord.RichEmbed()
        .setColor('#dbce20')
        .setTimestamp()
        .setAuthor("(Staff) " + message.author.username)
        .setDescription(`**Descrição**:\n
**Staff:** ${message.author.username}
**ID do Staff:** ${message.author.id}

**Punição:** TempMute

**Membro punido:** ${player.user.username}
**ID do membero:** ${player.id}
**Tempo:** ${ms(ms(tempo), { long:true })}`)
    let modlog = message.guild.channels.find("name", "mod-log");
    if (!modlog) {
        try {
            await message.guild.CreateChannel("mod-log", {type: 'text'});
            message.channel.send("Canal `mod-log` criado.");
        } catch (e) {
            console.error(e)
            message.channel.send("Crie um canal de texto com o nome de **mod-log**.");
        }
        return;
    }
    await modlog.send({ embed : embed });
    setTimeout(() =>{
        player.removeRole(role.id);
    }, ms(tempo));
}

exports.help = {
    name: "mute"
}
