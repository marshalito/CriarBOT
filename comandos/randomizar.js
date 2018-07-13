module.exports.run = async(bot, message, args) => {
    if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return;
    if (!args[1]){
    let piadas = [
        "**O vencedor do sorteio foi:** MichelThiago",
        "**O vencedor do sorteio foi:** </João>",
        "**O vencedor do sorteio foi:** Jvsl20",
        "**O vencedor do sorteio foi:** Joaquim_456",
        "**O vencedor do sorteio foi:** David._",
        "**O vencedor do sorteio foi:** TronnGamer",
        "**O vencedor do sorteio foi:** yDaniac_",
        "**O vencedor do sorteio foi:** Edu",
        "**O vencedor do sorteio foi:** Rodzzin",
        "**O vencedor do sorteio foi:** ySaamu_",
        "**O vencedor do sorteio foi:** GustavoReis",
        "**O vencedor do sorteio foi:** julianowsz",
        "**O vencedor do sorteio foi:** Vitor - Enxada 30cm",
        "**O vencedor do sorteio foi:** ManowF4t",
        "**O vencedor do sorteio foi:** qshizaq",
        "**O vencedor do sorteio foi:** Ryanziin",
        "**O vencedor do sorteio foi:** Wyzo",
        "**O vencedor do sorteio foi:** - yNatsui",
        "**O vencedor do sorteio foi:** ImVoldix",
        "**O vencedor do sorteio foi:** PVGPLAYS",
        "**O vencedor do sorteio foi:** LekkBr",
        "**O vencedor do sorteio foi:** Yuta",
        "**O vencedor do sorteio foi:** Guerreiro74",
        "**O vencedor do sorteio foi:** LuckySw0rd",
        "**O vencedor do sorteio foi:** RowCraft",
        "**O vencedor do sorteio foi:** Sasukedbr__",
        "**O vencedor do sorteio foi:** gagames",
        "**O vencedor do sorteio foi:** lsdclicker.xml",
        "**O vencedor do sorteio foi:** tallescraft",
        "**O vencedor do sorteio foi:** Mazuno",
        "**O vencedor do sorteio foi:** Combeed_",
        "**O vencedor do sorteio foi:** Zomp_",
        "**O vencedor do sorteio foi:** CachorroFrio",
        "**O vencedor do sorteio foi:** Gabriel Tatto"
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
