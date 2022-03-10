const Novader = require("novader")
const Player = new Novader.Player(client,{"YOUTUBE":"YOUTUBE_APİ_KEY"});
const Queue = new Novader.Queue("YOUTUBE_APİ_KEY");
module.exports.run = async (message, client, args) => {
const song = Player.getInfo(args.join(' '))
if(queue.has(message)){
queue.set(message,song.url)
meessage.channel.send(song.title+" Queue Added")
} else {
await Player.play(message,song.url)
  message.channel.send(song.title+" Now Playing!")
}
};
module.exports.help = {
    name:"play",
    aliases:["p","çal"]
}
