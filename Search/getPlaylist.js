
const Discord = require("discord.js")
const client = new Discord.Client()
const Novader = require("novader")
const scs = new Novader.Search("YOUTUBE_APİ_KEY");
module.exports.run = async (message, client, args) => {
  if(!args.join('')){return message.reply("Please Enter Youtube Playlist")}
const song = await scs.getPlaylist(args[0])
if(!song){return message.reply("No Video")}
console.log(song)
};
module.exports.help = {
    name:"yt-playlist",
    aliases:["yt-playlist-info","yts-playlist","search-playlist-youtube"]
}
