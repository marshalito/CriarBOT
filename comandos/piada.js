module.exports.run = async(bot, message, args) => {
    if (!args[1]){
    let piadas = [
        "Quem faz o melhor milkshake do asilo?... O vô Maltine.",
        "Por que a fita isolante é melhor que a fita crepe?... Porque ela é faixa preta",
        "Qual a diferença entre um paraquedista e um assaltante?...  O paraquedista **salta** e o assaltante **assalta**",
        "Porque a plantinha não vai no médico de domingo?... Porque só tem médico de plantão",
        "Pra que serve uma cama elástica no polo norte?... Para o urso polar",
        "Tinha um segurança de museu, um maratonista e um tigre. Eles apostaram uma corrida, quem chegou primeiro?... O segurança, porque segurança em primeiro lugar.",
        "Os ursos polares adoram o frio e os ursos bipolares às vezes adoram, às vezes não.",
        "Pra que óculos verde?... Pra verdeperto",
        "Pra que óculos vermelho?... Pra vermelhor",
        "Quando houver uma terceira guerra mundial, é só mudar o nome do Brasil para Palmeiras que aí ele não participa.",
        "Por que a velhinha nao usa relógio?.. Porque ela é um sen hora",
        "Por que o Roberto Carlos é considerado o rei?... Porque no show dele só vai coroa.",
        "Quando você estiver com frio, é só ir pro canto da sala. Lá tá 90 graus.",
        "O que a mãe açaí disse para seus filhos?... O último açaí fecha a porta",
        "Qual o contrário de volátil?... Vem cá sobrinho.",
        "O que o matemático foi fazer no banheiro?... Foi fazer π π.",
        "Pensa só se chovesse achocolatado... eu ia me molhar toddynho!",
        "Vocês ouviram falar dos dois bandidos que roubaram um calendário?... Parece que pegaram seis meses cada um.",
        "Que Deus olhe por mim... E o Celso Portiolli",
        "**Você sabia que pode enviar sua própria piada? Digite !enviarpiada e siga as instruções enviadas no seu privado!**",
        "O que o tomate foi fazer no banco?... Tirar o extrato.",
        "Eu estava no ônibus quando vi uma nuvem na minha frente. Não entendi no começo, mas aí lembrei que era uma nuvem passageira.",
        "Uma cobra estava em divida com outra cobra.... No jornal: Cobra cobra cobra",
        "Qual a diferença entre uma lagoa e uma padaria?... Na lagoa há sapinho, na padaria assa pão.",
        "O que aconteceu quando o policial se olhou no espelho?... O policial civil",
        "Por que no quartel não falta energia elétrica?... Porque todos os cabos foram soldados.",
        "Agora eu sei porque esse calor, é por causa do PT... Se fosse o Aécio, Neves.",
        "Por que certas pessoas dão risada quando estão lendo a bula de um remédio?... Porque o Ministério da Saúde adverte.",
        "A namorada do Usain Bolt queria terminar com ele. Então ele responde: Quer terminar? termina, mas depois não adianta correr atrás!",
        "Minha galinha não queria rir. Joguei ela do terceiro andar e ela rachou o bico...",
        "Qual o médico que é bem desligado?... O OFFtalmologista.",
        "Qual a comida que liga e desliga?... O StrogON-OFF.",
        "O que acontece a uma Jiboia quando ela não sabe nadar?... Ela Jafunda",
        "Sabe por que o México tem os melhores encanadores do mundo? Porque eles são mexicanos. **Enviada por:** kaueePAPAI.",
        "Por que o pato tem inveja do cachorro? Porque ele tem 4 patas. **Enviada por:** zRowPvP_.",
        "Uma baleia deu um tiro em uma baleia. No jornal: Baleia baleia baleia. **Enviada por:** kaueePAPAI.",
        "O professor pergunta o Joãozinho: - Arroz é com S ou com Z? E o Joãozinho responde: - Aqui na escola eu não sei, mas lá em casa é com feijão. **Enviada por:** ComanCraftS.",
        "Se você mandar carta pros cachorros, apenas o hotvailer. **Enviada por:** ComanCraftS.",
        "Tinha um policial e um bêbado, o policial perguntou pro bêbado: -Onde fica sua casa? E o bêbado respondeu: -Do lado da casa do meu vizinho. E o policial perguntou: -Onde fica a casa do seu vizinho? E o bêbado falou: -Se eu te falar você não vai acreditar -Fala logo. -Do lado da minha casa. **Enviada por:** ComanCraftS.",
        "Qual é o desenho favorito do Neymar?... Gravity Falls",
        "Sabia que H₂O não é água nos EUA?... É water",
        "Por que o cadeirante não toca fitas?... Porque ele não é um walkman.",
        "Sabe o que é um anfíbio do meio de dois pães?... Um rã burguer",
        "É melhor o Brasil não jogar com a Bélgica... Vai que dá Hazard.",
        "Brasil tem um jogador que pega a arma, engatilha e quando vai apontar desiste... O quase miro (Casemiro)",
        "Agora que o Brasil tem 4 pontos, um empate sérvia o Brasil",
        "Como ter a palavra de Deus, segurança e aulas de alemão em casa?... Adote um pastor alemão!",
        "Na Copa do mundo a Austrália ataca, e a Dina marca.",
        "Por que o terrorista vive dando bronca no seu filho?... Porque ele é um moleque atentado.",
        "Por que o policial não gosta de sabão?... Porque o trabalho dele é deter gente.",
        "Por quê o petróleo foi ao psicólogo?... Porque ele estava no fundo do poço."
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
    name: "piada"
}
