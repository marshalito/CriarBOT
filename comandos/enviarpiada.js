const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send(":white_small_square: **Qual a sua piada?**");
        let tazer3 = message.author.dmChannel.createMessageCollector(c=>c.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer3.on('collect', r3=> {
            let piada = r3.content;
            const reportbug = new Discord.RichEmbed()
            .setDescription(`**Autor da piada:** ${message.author.username}
**Piada:** ${piada}`)
            let canal = message.guild.channels.find("name", 'piadas')
            if (!canal) return message.channel.send("**[SUPERIOR]** Crie um canal para que o membro " + message.author.username + " possa enviar sua piada!");
            canal.send({ embed: reportbug });
            message.author.send("✅ **Sua piada foi enviada com sucesso! Será analisada pela nossa Administração, e caso seja boa, iremos adicionar à nossa lista. :wink:**")
        })
}
module.exports.help = {
    name: "enviarpiada"
}