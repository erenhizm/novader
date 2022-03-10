const Novader = require("novader")
module.exports.run = async (message, client, args) => {
const queue = new Novader.Queue(client,{ "Youtube":"KEY"})
  queue.SkipToNext(message,message.guild.id)
message.channel.send("I passed the music")
};
module.exports.help = {
    name:"skip",
    aliases:["atla","next"]
}
