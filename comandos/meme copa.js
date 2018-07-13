const Discord = require ("discord.js");
module.exports.run = (bot, message, args) => {
  if (!args[1]){
    let piadas = [
        "https://images-ext-1.discordapp.net/external/BaWeBmnhpuErtWImm-2eSXE04OBL7rzP1ntnh8l0PkQ/%3F_nc_cat%3D0%26oh%3D5681c474188603b540cc8f935c03ca13%26oe%3D5BE62F38/https/scontent.xx.fbcdn.net/v/t1.0-9/s720x720/36716491_748888025533598_3253796528287907840_o.jpg?width=400&height=232",
        "https://pbs.twimg.com/media/Dh7iZBuVQAEJVzw.jpg",
        "https://images-ext-2.discordapp.net/external/QvEDuGf7LbdF9fngHkhfynOmJqA3BkLyRRC9wTtmleg/%3F_nc_cat%3D0%26oh%3D7a80909c3b141cf3012e6f709b292a1b%26oe%3D5BCF4E4C/https/scontent.xx.fbcdn.net/v/t1.0-9/36681153_748693285553072_5336105907291947008_n.jpg?width=315&height=300",
        "https://images-ext-2.discordapp.net/external/CWj_qOlXA8MjLKf9IyhTD8hZAckYJkZZO3n1j23sAHY/%3F_nc_cat%3D0%26oh%3Dd686e63ce946cf0fe3e73c767a9b3e64%26oe%3D5BD59FD3/https/scontent.xx.fbcdn.net/v/t1.0-9/s720x720/36637455_748385435583857_5988161996720177152_n.jpg?width=400&height=233",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/37030185_760186094403791_3004538728329773056_n.jpg?_nc_cat=0&oh=123ffb555d5ac8ad90ee286bc1016e8c&oe=5BCBA65A",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/37077678_760167517738982_4513308899159310336_n.jpg?_nc_cat=0&oh=f2419e39186530017823be3b60ddcb31&oe=5BDE7E71",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/37033749_758635377892196_6249276096848592896_n.jpg?_nc_cat=0&oh=e9f6d5eb9301cd347f228bcde876fd46&oe=5BE932CA",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/37069874_758499127905821_1371381910856531968_n.jpg?_nc_cat=0&oh=1144506ff6ed406aca533f65a8ac1ee9&oe=5BD2EF48",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36929656_756924094729991_6987707401688317952_n.jpg?_nc_cat=0&oh=0cf0fe65260ac795dff8927cf746fc62&oe=5BD1DD6F",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36919009_756896544732746_4021467910349258752_n.jpg?_nc_cat=0&oh=3130bd81d9ce41af99ed35579cbfc613&oe=5BD595F8",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36980996_756867681402299_1293355635127091200_n.jpg?_nc_cat=0&oh=c9820a5a1343987bb531955c5f9f5504&oe=5BEBD1EE",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/37028769_756862061402861_6295262393291243520_n.jpg?_nc_cat=0&oh=a8d0ab8f5e41dc499151941e01436625&oe=5BE4DF69",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36928604_756817034740697_2302580801163755520_n.jpg?_nc_cat=0&oh=7dfd108dcb597113721620771e9cb193&oe=5BE55AC9",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36860757_756790728076661_7136725084479160320_n.jpg?_nc_cat=0&oh=4d3d167d0fcbc0e3071a0310421bfe0a&oe=5BE49DA0",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36878524_756580598097674_6016587310055817216_n.jpg?_nc_cat=0&oh=431e76350003e09e9f7a6b1a802f396d&oe=5BCF5E34",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36867540_756490884773312_6717583649878835200_n.jpg?_nc_cat=0&oh=a0572bbb8e0f3ecf81f058386b71baa5&oe=5BDB1EE8", 
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36861967_755934671495600_9198615523238084608_n.jpg?_nc_cat=0&oh=a1060bf750044876faf743d16970dc76&oe=5BD42099",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36905966_755015251587542_4186991418746601472_n.jpg?_nc_cat=0&oh=2596915db55c79eb99e89aa7c2677472&oe=5BD47876",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36823104_754331048322629_141245338173308928_n.jpg?_nc_cat=0&oh=3c312ea2ee44f339b28cf6ed3c79c6f6&oe=5BDB9B25",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36916359_754184948337239_461914099073155072_n.jpg?_nc_cat=0&oh=a8750da3aeee9a43eaa35e125f63de9b&oe=5BEAF62D",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36939205_754175085004892_1581959879591985152_n.jpg?_nc_cat=0&oh=ff3d83b46f6eaa237395c1a67de8ba8b&oe=5BD1DF0B",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36790334_754044221684645_4419448655262515200_n.jpg?_nc_cat=0&oh=0d980a966c42af7c286f0bad3a00a250&oe=5BD1B7C3", 
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36812733_753163998439334_6657714928213819392_n.jpg?_nc_cat=0&oh=452f2b218f4efb0793d14d700bca47a9&oe=5B9FFF3A",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36766225_752903001798767_7287420935546601472_n.jpg?_nc_cat=0&oh=07ccb517df645e4a09a4bbced3c43ddf&oe=5BD2D613",
        "https://scontent.fiza1-1.fna.fbcdn.net/v/t1.0-9/36826301_752746678481066_1960334914842787840_n.jpg?_nc_cat=0&oh=81b7c03910a7dcb5bd57578b0be0eda7&oe=5BA2365C"

    ]
    var piada = Math.floor((Math.random() * piadas.length))
    message.channel.send(piadas[piada]);
}
    if (args[1] == "enviar"){
        message.author.createDM();
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
    name: "memecopa"
}