const Discord = require('discord.js');
module.exports.run = async (client, message, args) => {
    message.delete(O_o=>{});
    const msg1 = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription(`**Selecione uma categoria:**
\n🎲 Geral
📋 Formulários
💵 Compras
📷 Plataformas
🥇 Produtos VIP's
🤖 Comandos`)
    message.member.send(msg1).then(msg=> {
        msg.react("🎲").then(r => {
            msg.react("📋")
            msg.react("💵")
            msg.react("📷")
            msg.react("🥇");
            msg.react('🤖')
    message.reply("verifique suas mensagens privadas. :wink:").then(a=>a.delete(1700));

            const geral  = (reaction, user) => reaction.emoji.name === '🎲' && user.id === message.author.id;
            const formulario = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
            const compras = (reaction, user) => reaction.emoji.name === '💵' && user.id === message.author.id;
            const plataformas = (reaction, user) => reaction.emoji.name === "📷" && user.id === message.author.id;
            const vips = (reaction, user) => reaction.emoji.name === "🥇" && user.id === message.author.id
            const comandos = (reaction, user) => reaction.emoji.name === "🤖" && user.id === message.author.id;


            const gerall = msg.createReactionCollector(geral, { time: 60000 });
            const form = msg.createReactionCollector(formulario, { time: 60000 });
            const comprass = msg.createReactionCollector(compras, { time: 60000 });
            const plataform = msg.createReactionCollector(plataformas, { time: 60000});
            const vip = msg.createReactionCollector(vips, { time: 60000})
            const comands = msg.createReactionCollector(comandos, { time: 60000});

            gerall.on('collect', r=>{
                const gerau = new Discord.RichEmbed()
                .setAuthor("🎲 GERAIS", message.author.displayAvatarURL)
                .setDescription(`
**• Qual o IP do servidor?**
**R:** Para jogar em nosso servidor, quando ele lançar, entre pelo seguinte IP: **jogar.rededream.com**

**• Como posso reportar um jogador para a equipe?**
**R:** Para reportar um jogador, vá no chat #reports e digite o seguinte:
**Ex.:** !reportar mrtaazer - Hack [http://prova.report/]

**• Quais staffers fazem parte da equipe?**
**R:** No chat **#staff-list** há uma lista citando todos os membros da nossa equipe!`)
                .setFooter("Dream - Gerais")
                .setColor('#00ffbd')
                .setTimestamp()
                message.member.send({embed:gerau});
            });
            form.on('collect', r=>{
                const form = new Discord.RichEmbed()
                .setAuthor("📋 FORMULÁRIOS", message.author.displayAvatarURL)
                .setDescription(`
**• Como posso me tornar Ajudante?**
**R:** O formulário para Ajudante está FECHADO no momento.

**• Como posso me tornar Youtuber?**
**R:** Para obter o grupo **[YT]** no servidor, você precisará de **10 mil inscritos.**
**R:** Para obter o grupo **[Dream]** no servidor, você precisará de **2,5 mil inscritos.**

**• Como posso me tornar Construtor?**
**R:** Caso queira se tornar um Construtor, [clique aqui](https://t.co/pWkmQJ2uji) e preencha o formulário.`)
                .setFooter("Dream - Formulários")
                .setColor('#ffce00')
                .setTimestamp()
                message.member.send({embed:form});
            });
            comprass.on('collect', r=>{
                const shop = new Discord.RichEmbed()
                .setAuthor("💵 COMPRAS", message.author.displayAvatarURL)
                .setDescription(`
**• Comprei um produto, e ele não chegou, o que fazer?**
**R:** Caso seu produto não tenha chegado no prazo estipulado (quando a loja for disponibilizada), [clique aqui](http://rededream.com/ticket) e contate nossa equipe encarregada por esse serviço através de um **ticket**.`)
                .setFooter("Dream - Compras")
                .setColor('#00ff06')
                .setTimestamp()
                message.member.send({embed: shop});
            });
            plataform.on('collect', r=>{
                const redes = new Discord.RichEmbed()
                .setAuthor("📷 PLATAFORMAS", message.author.displayAvatarURL)
                .setDescription(`
**• Quais as plataformas que a Rede Dream terá?**
**R:** A rede possuirá as seguintes plataformas: **Discord**, **Twitter** e **Fórum**.

**• Como posso acessar o Discord do servidor?**
**R:** Bom, você já está no Discord do servidor! Mas, caso queira saber como convidar seus amigos para cá, apenas clique no botão **Criar um convite instantâneo** e envie o link para quem quiser!

**• Como posso acessar o Twitter do servidor?**
**R:** Para acessar o Twitter da rede [clique aqui](https://twitter.com/ServidoresDream).

**• Como posso acessar o Fórum do servidor?**
**R:** O nosso fórum ainda está em desenvolvimento. Fique ligado, pois assim que tudo estiver pronto, iremos divulgá-lo!`)
                .setFooter("Dream - Plataformas")
                .setColor('#0600ff')
                .setTimestamp()
                message.member.send({embed:redes})
            });
            vip.on('collect', r=>{
                const vips = new Discord.RichEmbed()
                .setAuthor("🥇 PRODUTOS VIP's", message.author.displayAvatarURL)
                .setDescription(`
**• Como posso adquirir um VIP no servidor?**
**R:** Quando a loja estiver disponível para todos, [clicando aqui](http://rededream.com/loja) poderá adquirir um produto VIP.

**• Tenho VIP no servidor, como posso solicitar minha tag no Discord?**
 **R:** Para solicitar sua tag VIP, contate um de nossos **Administradores** enviando um comprovante de que realmente possui o produto. Eles terão um prazo de até 24h para ativar sua tag!`)
                .setFooter("Dream - Produtos VIP's")
                .setColor('#00b6ff')
                .setTimestamp()
                message.member.send({embed: vips});
            });
            comands.on('collect', r=>{
                const comandos = new Discord.RichEmbed()
                .setAuthor("🤖 COMANDOS", message.author.displayAvatarURL)
                .setDescription(`
:exclamation: **!reportar** - Reportar jogadores

:bulb: **!sugerir** - Enviar sugestões
                
:sunrise_over_mountains: **!avatar** - Exibir o avatar de um membro
                
:tools: **!bug** - Reportar bugs
                
:raising_hand: **!ajuda** - Verificar novamente os tópicos de ajuda
                
:dog: **!dog** - Exibir um cachorrinho no seu privado
                
:cat: **!cat** - Exibir um gatinho no seu privado
                
:kissing_heart: **!beijo** - Beijar um membro
                
:couple: **!abraço** - Abraçar um membro
                
:head_bandage: **!tapa** - Dar um tapa num membro
                
:page_with_curl: **!membros** - Exibir o número de membros

:pushpin: **!revisão** - Enviar sua revisão de punição

:joy: **!piada** - Enviar uma piada no chat`)
                .setFooter("Dream - Comandos")
                .setColor('#00b6ff')
                .setTimestamp()
                message.member.send({embed: comandos});
         });
        })
    })
}

module.exports.help = {
    name: "ajuda"
}