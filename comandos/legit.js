const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('HACKERTEST!')
        .setDescription(`Será que temos um hacker por aqui?\n
**Sintaxe:** !legit <usuário>.
**Exemplo:** !legit mrtaazer.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }

    
    let crush = message.content.split(" ").slice(1).join(" ");
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`:computer: **|** Será que temos um hacker por aqui? Vamos ver se **${crush}** está .legit mesmo:`)

        message.channel.send({ embed : embed });

    let piadas = [
        "**9% - Legit? SIM!**",
        "**18% - É certo que nesse jogador nunca passou um hack!**",
        "**27% - Tenho quase certeza que esse jogador hacker é que não é! :relaxed:**",
        "**36% - Parece que esse jogador não utiliza nada ilícito.**",
        "**45% - Bom, isso é um número alto? Não sei... Talvez hacker ele não seja.**",
        "**54% - Ele pode até parecer hacker, mas talvez seja um pro player!**",
        "**63% - É melhor ficar de olho nele, não se sabe o que pode acontecer.**",
        "**72% - 72 porcento? Talvez ele já tenha usado hack algumas vezes...**",
        "**81% - Telem esse jogador!!! Pode parecer legit para alguns, mas é quase certo que usa hack.**",
        "**100% - Esse jogador é viciado em programas ilícitos! Não consegue jogar limpo? :pensive:**"
        
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);

}
module.exports.help = {
  name: "legit"
}