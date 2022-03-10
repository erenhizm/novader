const Novader = require("novader")
const Player = new Novader.Player(client,{"Youtube":"KEY","leave":true}) // leave => if the song queue ends i leave the channel = true/false
module.exports.run = async (message, client, args) => {
  if(!message.member.voice.channel){return message.channel.send("You are not on the channel!")}
  Player.leave(message)
  message.channel.send("I left the channel")
};
module.exports.help = {
    name:"test",
    aliases:["novader"]
}
