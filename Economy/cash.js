const Discord = require("discord.js")
const Novader = require("novader")
const client = new Discord.Client()
const eco = new Novader.Economy();
module.exports.run = async (message, client, args) => {
  if(!eco.has(message.author.id)){
    queue.AccountCreate({"id":message.author.id,"name":message.author.username,"money":0})
    message.channel.send(`Hi, ${message.author.username} Account Created!\n Try Again!`)
  return}
if(message.mentions.members.first()){
message.channel.send(`Member Cash **${eco.Account(member.id).money}**`)
} else {
message.channel.send(`Your Cash **${eco.Account(message.author.id).money}**`)
}
};
module.exports.help = {
    name:"cash",
    aliases:["money","bank","eco-money"]
}
