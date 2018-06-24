const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send(":white_small_square: **Qual jogador você deseja reportar?**");
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let player = r.content;
            message.author.send(":white_small_square: **Por qual motivo esse jogador deveria ser punido? Inclua provas.** ");
            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Acusado:** ${player}
**Motivo:** ${motivo}`)
                let canal = message.guild.channels.find("name", 'denúncias')
                if (!canal) return message.channel.send("**[SUPERIOR]** Crie um canal para que o player " + message.author.username + " possa fazer um report!");
                canal.send({ embed: reportplayer });
                message.author.send("✅ **Seu report foi enviado com sucesso!**")
            })
        })
}
module.exports.help = {
    name: "reportar"
}