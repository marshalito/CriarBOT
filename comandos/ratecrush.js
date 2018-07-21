const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
    if (!args[0]){
        const msg = new Discord.RichEmbed()
        .setTitle('Comando: !ratecrush')
        .setDescription(`Como usar:\n
**Sintaxe:** !ratecrush <usuário>.
**Exemplo:** !ratecrush mrtaazer.`)
        .setColor('#dcf442');
        message.channel.send({ embed : msg });
        return;
    }

    
    let crush = message.content.split(" ").slice(1).join(" ");
    var embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setDescription(`:thinking: **|** A minha nota para **${crush}** é:`)

        message.channel.send({ embed : embed });

    let piadas = [
        "**1/10!** É triste ter um crush como esse... Boa sorte nas próximas escolhas!",
        "**2/10!** Não queria te criticar, mas tá na hora de arrumar outro(a) crush!",
        "**3/10!** Sua situação não deve ser das melhores, acho melhor pensar em outras opções, :d",
        "**4/10!** Não que seu(sua) crush seja ruim, quem sabe você possa se surpreender?",
        "**5/10!** Seu(sua) crush não é nem ruim, nem boa. Talvez aja um meio-termo.",
        "**6/10!** Seu(sua) crush é legal, parabéns!",
        "**7/10!** Ele(ela) tem potencial para ser alguém muito interessante!",
        "**8/10!** Um crush excelente, parabéns!",
        "**9/10!** Melhor crush? Impossível!",
        "**10/10!** Essa é a famosa dez/dez, vai pra cima, não vejo uma opção melhor que essa!!!"
        
    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);

}
module.exports.help = {
  name: "ratecrush"
}