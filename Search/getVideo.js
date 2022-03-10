const Discord = require("discord.js")
const client = new Discord.Client()
const Novader = require("novader")
const scs = new Novader.Search("YOUTUBE_APİ_KEY");
module.exports.run = async (message, client, args) => {
  if(!args.join('')){return message.reply("Please Enter Youtube Video")}
const song = await scs.VideoGet(args.join(' '))
if(!song){return message.reply("No Video")}
message.channel.send(`**Song Name**: ${song.title}\n**Song publication** : ${song.publication} \n**Song Channel Name**:${song.channel.name}`)
};
module.exports.help = {
    name:"youtube-url",
    aliases:["yt-info-url","yt-url","yturl"]
}
