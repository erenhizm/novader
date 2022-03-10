const Discord = require("discord.js")
const Novader = require("novader")
const client = new Discord.Client()
const eco = new Novader.Economy();
module.exports.run = async (message, client, args) => {
  if(!eco.has(message.author.id)){
    queue.set(message.author.id,0)
    message.channel.send(`Hi, ${message.author.username} Account Created!\n Try Again!`)
  return}
if(message.mentions.members.first()){
message.channel.send(`Member Cash **${eco.get(member.id).money}**`)
} else {
message.channel.send(`Your Cash **${eco.get(message.author.id).money}**`)
}
};
module.exports.help = {
    name:"cash",
    aliases:["money","bank","eco-money"]
}
