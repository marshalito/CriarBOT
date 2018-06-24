const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send("Como funciona este bug?");
        let tazer3 = message.author.dmChannel.createMessageCollector(c=>c.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer3.on('collect', r3=> {
            let comofunfaobug = r3.content;
            const reportbug = new Discord.RichEmbed()
            .setDescription(`**Autor:** ${message.author.username}
**Descrição do bug:** ${comofunfaobug}`)
            let canal = message.guild.channels.find("name", 'reports')
            if (!canal) return message.channel.send("**[SUPERIOR]** Crie um canal para que o player " + message.author.username + " possa fazer um report de bug!");
            canal.send({ embed: reportbug });
            message.author.send("✅ **Seu report de bug foi enviado com sucesso!**")
        })
}
module.exports.help = {
    name: "bug"
}