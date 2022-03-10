const Novader = require("novader")
const scs = new Novader.Search("YOUTUBE_APİ_KEY");
module.exports.run = async (message, client, args) => {
  if(!args[0]){return message.channel.send("Please Enter Spotify URL")}
const spotify = await scs.GetSpotify(args[0])
if(!spotify){return message.channel.send("Error Use, Try Again")}
message.channel.send(`> **Song Name:** ${song.name}\n > **Playlist Name** ${song.Playlist.name || "not"}\n >  > **Playlist AuthorName** ${song.Playlist.author || "not"} \n > **Playlist id** ${song.Playlist.id || "not"}`)
};
module.exports.help = {
    name:"spotify",
    aliases:["spo","spotify-info","spo-info"]
}
