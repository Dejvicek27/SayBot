const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ">"; 

bot.on("ready", () => {
 console.log('Bot je ready!');
});
 bot.user.setActivity("Začni s >help", {type: "PLAYING"});

 //bot.user.setGame("on SourceCade!");
});

bot.on("message", async message => {
      if(message.author.bot) return;
      if(!message.content.startsWith(prefix)) return;
      if(message.channel.dm) return message.reply('Příkazy nefungují v DM');
      let messageArray = message.content.split(" "); 
      let cmd = messageArray[0]; 
      let args = messageArray.slice(1);
      if(cmd === `${prefix}help`){
         var embed = new Discord.RichEmbed()
         .setAuthor("Help")
         .setDescription("Můj prefix je >")
         .setColor("RED")
         .setFooter("by Dejvicek27™")
         .setTimestamp()
         .addField("PŘÍKAZ", "Say - Řeknu za tebe co chceš!")
         .addField("INVITNI MĚ", "[INVITE](https://discordapp.com/api/oauth2/authorize?client_id=557364813886521398&permissions=8&scope=bot)")
         .setImage("https://cdn.discordapp.com/attachments/557326857377415208/557361021157900289/JPEG_20190318_221748.jpg")
         .setThumbnail("https://cdn.discordapp.com/attachments/557326857377415208/557629148017983488/IMG_20190319_185901_859.jpg");
          message.channel.send(embed)
          return;
      }
      if(cmd === `${prefix}say`){
         let msg = args.join(" ");
         message.channel.send(msg)
      }
 

})
bot.login(process.env.token)
