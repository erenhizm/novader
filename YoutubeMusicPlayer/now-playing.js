const Novader = require("novader")
module.exports.run = async (message, client, args) => {
 const player = new Novader.Player(client,{"Youtube":"KEY"})
  const queue = new Novader.Queue(client,{"Youtube":"KEY"})
  const song = await player.getInfo(queue.get(message)[0])
if(player.isPlaying(message)){
message.channel.send(song.title+" Now Playing!")
} else {
message.channel.send("No Playing!")
}
};
module.exports.help = {
    name:"now-playing",
    aliases:["playing","np"]
}
