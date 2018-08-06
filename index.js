console.log("Ativando..")
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.js");
var prefix = config.prefix
const fs = require('fs')

bot.on('ready', () =>{
  console.log(`Estou ativado! <${bot.user.username}>`);
  bot.user.setActivity("eu sendo configurado xd", {type: "WATCHING"}); //Coloque no lugar de WATCHING: PLAYING, LISTENING, etc...
});
bot.commands = new Discord.Collection();
fs.readdir("./comandos", (err, files) => {
  if(err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log (cors.bgRed("@Nenhum comando carregado"));
    return;
  }
  console.log(cors.bgRed(`@Carregado ${jsfiles.length} comando(s)!`));
  jsfiles.forEach((f, i) => {
    let props = require(`./comandos/${f}`);
    bot.commands.set(props.help.name, props)
  });
});

bot.on("message", async(message) =>{
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let args = message.content.split(" ").slice(1).join(" ");
  let command = message.content.split(" ")[0];
  if(!command.startsWith(prefix)) return;

let cmd = bot.commands.get(command.slice(prefix.length));
if(cmd)
cmd.run(bot, message, args);
});


bot.on('guildMemberAdd', member =>{
  let channel = member.guild.channels.find('name', 'boas-vindas'); //No lugar de boas-vindas, coloque o nome do canal de entrada.
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(memberavatar)
      .addField('Novo membro!', `${member} entrou no servidor, seja bem-vindo(a)! Esta é a mensagem enviada num chat específico.`)
      .setTimestamp()

      channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "entrou!" + `${member.guild.name}`)

});

bot.on('guildMemberAdd', member =>{
  let embed = new Discord.RichEmbed()
  .setColor('#2fd12c')
  .setDescription(`Olá. Seja **bem-vindo(a)**. Este é o embed que é enviado no privado dos novos membros!`)
  .setTimestamp()

  member.sendEmbed(embed);
});

bot.login(process.env.BOT_TOKEN);
//Coloque o seu token no lugar do que está entre os parênteses ;D
