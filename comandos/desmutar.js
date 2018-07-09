module.exports.run = async(client, message, args) => {
    const Discord = require('discord.js');
    if (!message.member.hasPermissions("MANAGE_ROLES")) return;
    if (!args[0]){
        message.reply("**use:** !desmutar <@membro>.");
        await message.delete();
        return;
    }
    let playmute = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!playmute) return message.reply("Especifique um membro.");
    if (playmute.hasPermissions("MANAGE_MESSAGES")) return;
    let role = message.guild.roles.find('name', "Silenciado");
    if (!role){
        message.channel.send("Grupo **Silenciado** criado! :relaxed:").then(a => a.delete(1600));
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

    await(playmute.removeRole(role.id));
    message.reply(`o usuário <@${playmute.id}> não está mais silenciado!`);

}
module.exports.help = {
  name: "desmutar"
};
