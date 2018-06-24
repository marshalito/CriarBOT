const Discord = require("discord.js");
module.exports.run = async(client, message, args) => {
        await message.author.createDM();
        message.author.send(":pushpin: **Por qual motivo você foi punido?**");
        var tazer = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 50, max: 1 });
        tazer.on('collect', r=> {
            let motivo1 = r.content;
            message.author.send(":pushpin: **Por que julga ter sido punido erroneamente? Seja conclusivo nessa resposta. Esta revisão será in-substituível.** ");
            var tazer2 = message.author.dmChannel.createMessageCollector(b=>b.author.id == message.author.id,  { time: 1000 * 60, max: 1 });
            tazer2.on('collect', r2=> {
                let motivo = r2.content;
                const reportplayer = new Discord.RichEmbed()
                .setDescription(`**Autor:** ${message.author.username}
**Motivo da punição:** ${motivo1}
**Por que deveríamos te despunir?** ${motivo}`)
                let canal = message.guild.channels.find("name", 'revisões')
                if (!canal) return message.channel.send("**[SUPERIOR]** Crie um canal para que o player " + message.author.username + " possa fazer um report!");
                canal.send({ embed: reportplayer });
                message.author.send("✅ **Sua revisão foi enviada com sucesso! Será analisada por um de nossos Administradores. Caso você seja despunido, iremos te avisar!**")
            })
        })
}
module.exports.help = {
    name: "revisão"
}