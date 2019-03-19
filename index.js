const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ">"; 

bot.on("ready", () => {
 console.log('Bot je ready!');
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
         .setDescription("Mam rad hranolky")
         .setColor("GREEN")
         .setFooter("by Dejvicek27™")
         .setTimestamp()
         .addField("FIELD NAME", "FIELD VALUE")
         .addField("FIELD NAME", "FIELD VALUE")
         .setImage("https://cdn.discordapp.com/attachments/557326857377415208/557361021157900289/JPEG_20190318_221748.jpg")
         .setThumbnail("https://cdn.discordapp.com/attachments/557326857377415208/557361021157900289/JPEG_20190318_221748.jpg");
          message.channel.send(embed)
          return;
      }
 

})  
bot.login(process.env.token)
