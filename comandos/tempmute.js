module.exports.run = async(client, message, args) => {
    const Discord = require('discord.js');
    if (!message.member.hasPermissions("MANAGE_ROLES")) return;
    if (!args[0]){
        message.reply("**use:** !tempmute <nick> <tempo>.");
        await message.delete();
        return;
    }
    let playmute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!playmute) return message.reply(":x: Usuário não definido.");
    if (playmute.hasPermissions("MANAGE_MESSAGES")) return;
    let role = message.guild.roles.find('name', "Silenciado");
    if (!role){
        message.channel.send(":x: o cargo `Silenciado` não foi identificado, mas meu sistema de última geração o criou! :relaxed:").then(a => a.delete(1600));
        try {
            role = await message.guild.createRole({
                name: "Silenciado",
                color: "#020101",
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
    let tempo = args[1];
    if (!tempo) return message.reply(":x: Tempo não indentificado.");

    await(playmute.addRole(role.id));
    message.reply(`usuário **silenciado** com **sucesso**.`);

    setTimeout(function(){
        playmute.removeRole(role.id);
        message.channel.send(`O usuário <@${playmute.id}> foi desmutado com **sucesso**.`)
    }, ms(tempo));
    return await message.delete()
}
module.exports.help = {
  name: "tempmute"
};