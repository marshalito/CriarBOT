module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!args[1]){
    let piadas = [
        "**O vencedor do sorteio foi:** mrtaazer",
        "**O vencedor do sorteio foi:** ThiagoGouveia"
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);
}
    if (args[1] == "enviar"){
        await message.author.createDM();
        message.author.send("Diga-me uma piada.")
        var pd = message.author.dmChannel.createMessageCollector(a=>a.author.id == message.author.id, { time: 1000 * 60, max: 1 });
        pd.on("collect", r=>{
            let pid = r.content.toLowerCase();
            let canal = message.guild.channels.get("459721847467016192");
            canal.send("O membro " + message.author.username + " acaba de enviar uma piada!\n **" + pid + "**");
        })
    }
}
module.exports.help = {
    name: "randomizar"
}