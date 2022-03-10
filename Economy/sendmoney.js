const Discord = require("discord.js")
const Novader = require("novader")
const client = new Discord.Client()
const eco = new Novader.Economy();
module.exports.run = async (message, client, args) => {
  let member = message.mentions.members.first()
  if(eco.get(message.author.id).money < args[1]){return message.reply("This your no money until!")}
    if(!eco.has(member.id)){return message.channel.send(`No Account!!\n Try Again!`)}
  if(isNaN(args[1]){return message.channel.send("**Please Enter Number Money**")}
if(message.mentions.members.first()){
 eco.Recieve(message.author.id,Number(args[1])) 
   eco.set(message.author.id,Number(args[1]))
message.channel.send(`Cash to Member allocated **${args[1]}**`)
} else {
message.channel.send(`Please Enter Member!`)
}
};
module.exports.help = {
    name:"send",
    aliases:["give","gonder","eco-give"]
}
