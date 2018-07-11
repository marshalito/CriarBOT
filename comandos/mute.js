const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (client, message, args) =>{
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('Comando: !silenciar')
        .setDescription(`Como usar:\n
**Descrição:** Silenciar um player por certo tempo.
**Sintaxe:** !silenciar @player <tempo>
**Dica:** Use **s** para segundos, **m** para minutos, **d** para dias.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }
    await message.delete().catch(O_o=>{});
    let player = message.mentions.members.first() //|| message.guild.members.get(args[0]);
    if (!player) return message.reply(":x:**|**Usuário não definido.");
    if (player.id == message.author.id) return;
    if(message.guild.member(player).roles.some(r=>["Diretor", "Gerente", "Administrador(a)", "Desenvolverdor", "Moderador(a)", "Ajudante"].includes(r.name))) return;
    let role = message.guild.roles.find('name', "Silenciado");
    if (!role){
        message.channel.send("O grupo Silenciado foi adicionado.").then(a => a.delete(1600));
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
    if (!tempo) return message.reply("Especifique por quanto tempo esta punição durará.");
    await(player.addRole(role.id));
    var embed = new Discord.RichEmbed()
        .setColor('#dbce20')
        .setTimestamp()
        .setDescription(`**Autor:** ${message.author.username}
**Membro punido:** ${player.user.username}
**Duração:** ${ms(ms(tempo), { long:true })}
**Punição aplicada:** Mute`)
    let modlog = message.guild.channels.find("name", "punições");
    if (!modlog) {
        try {
            await message.guild.CreateChannel("punições", {type: 'text'});
            message.channel.send("Canal `punições` criado.");
        } catch (e) {
            console.error(e)
            message.channel.send("Crie um canal com o nome `punições`.");
        }
        return;
    }
    await modlog.send({ embed : embed });
    setTimeout(() =>{
        player.removeRole(role.id);
    }, ms(tempo));
}

exports.help = {
    name: "silenciar"
}