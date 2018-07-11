const Discord = require('discord.js');
const ms = require('ms');
module.exports.run = async (bot, message, args) =>{
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Eu não possuo a permissão `Administrador`, adicione-a ou descarte este comando.");
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('Comando: !mute')
        .setDescription(`Como usar:\n
**Descrição:** Silenciar membros.
**Sintaxe:** !silenciar @membro <tempo>.
**Dica:** **10s** para segundos, **10m** para minutos e **10d** para dias.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }
    await message.delete().catch(O_o=>{});
    let player = message.mentions.members.first() //|| message.guild.members.get(args[0]);
    if (!player) return message.reply("Especifique qual usuário deve ser silenciado.");
    if (player.id == message.author.id) return message.channel.send("Você não pode se silenciar.");
    if(message.guild.member(player).roles.some(r=>["Diretor", "Gerente", "Administrador(a)", "Moderador(a)", "Ajudante"].includes(r.name))) return;
    let role = message.guild.roles.find('name', "Silenciado");
    if (!role){
        message.channel.send("O grupo **Silenciado** foi criado, agora a punição pode ser efetuada! :wink:").then(a => a.delete(1600));
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
    if (!tempo) return message.reply("Especifique por quanto tempo a punição durará.");
    await(player.addRole(role.id));
    var embed = new Discord.RichEmbed()
        .setColor(role.color)
        .setDescription(`**Autor:** ${message.author.username}
**Membro punido:** ${player.user.username}
**Duração:** ${ms(ms(tempo), { long:true })}
**Punição aplicada:** Silenciamento`)
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
    name: "silenciar"
}