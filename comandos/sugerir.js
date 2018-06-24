const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send(":bulb: **Explique detalhadamente sua sugestão.**");
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let sugestao = r.content;
            message.author.send(":bulb: **Por qual motivo deveríamos implementar esta sugestão?** ");
            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Sugestão:** ${sugestao}
**Por que deveríamos implementar:** ${motivo}`)
                .setFooter("Dream - Sugestões", message.author.displayAvatarURL)
                let canal = message.guild.channels.find("name", 'sugestões')
                if (!canal) return message.channel.send("**[SUPERIOR]** Crie um canal para que o player " + message.author.username + " possa fazer um report!");
                canal.send({ embed: reportplayer });
                message.author.send("✅ **Sua sugestão foi enviada com sucesso!**")
            })
        })
}
module.exports.help = {
    name: "sugerir"
}