const Discord = require("discord.js")
const client = new Discord.Client()

client.on("message",message => {
  if(message.author.bot){return}
  level.on("LevelUp",(upeded,info) => {
    console.log(upeded ,info)
    //TRUE/FALSE { name: 'USERNAME', level: level, xp: xp }
    if(upeded){
      console.log(info.name+" Level Upeded! 🥳 "+info.level)
    }
  })
if(level.upLevel(message)){
  console.log(info.name+" Level Upeded! 🥳 "+info.level)
}

if(level.hasLevel(message.author.id)){
  console.log(level.hasLevel(message.author.id))
} else {
  console.log("user level is none")
}
if(message.content){
  level.addLevel(message,{antispam:true})
}
})
 client.login("<YOUR_TOKEN>")
