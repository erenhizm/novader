**Novader v0.0.7**

## MADE İN TURKEY HELPER MODULE

# for download

```sh
npm install --save novader
```
`
# INNOVATION
```js
BUGS FIXED!
Level System Added!
Cmmand Handler Added!
Search.Playlist("PLAYLİST_URL")
// YOUTUBE PLAYLİST DETAİLS FUNCTİON ADDED
```

## 24/7 in maintenance

# SYSTEMS

## Level System
```js
level.on("LevelUp",(upeded,info) => {
 console.log(upeded ,info)
    //TRUE/FALSE { name: 'USERNAME', level: level, xp: xp }
  })

level.upLevel(message) //level upeded?
level.hasLevel(member_id) // user level is there?
level.addLevel(message,{antispam:true}) //levle system
```
[level_example](#level-code)

## Level System
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const Novader = require("novader")
  const handler = new Novader.CommandHandler(client,{prefix: "!",commandFile:"./cmmands",readyCommand:"> Ready Command [command]"})
  handler.CreateHandler()
```
[handler_example](#handler-code)


## Economy System
```js
const eco = new Novader.Economy();

eco.set("member_id",10) // MONEY INCREASE
 eco.Recieve("member_id",10) // MONEY Decrease 
 eco.has("member_id") // ACCOUNT true/false ?
 eco.Account("member_id") //GET ACCOUNT İD İN MONEY
  eco.reset() // ALL DELETE
```

## Youtube Music Player System
```js
// client deleted
const player = new Novader.Player("YOUTUBE_APİ_KEY");

await player.play("video NAME/URL") //VİDEO PLAY CODE
await player.getInfo("video NAME/URL",0) /// Enter the sequence number of the video to be selected 0/5
player.leave() //Sudden Exit from the Current Channel (BETA)
player.isPlaying() //is Playing => True Else Falase (BETA)
player.setVol(0.5) //set Volume (BETA)
```

Required module for Music System
```sh
npm install ffmpeg-static
```

## Queue System
```js
const queue = new Novader.Queue("YOUTUBE_APİ_KEY");

queue.set("123",elements.url) //video Data Create and Set
queue.has() //Queue TRUE/FALSE
queue.get("123") //Queue Get "Queue_Namme"
queue.delete("123") //Queue Delete "Queue_Namme"
queue.SkipToNext("123") //Video Skip To Nexted (Beta)
```

## Database System
```js
const db = new Novader.Database({"file":"./filename.json","AutoFile": true,"Jsonspaces":1});
db.all() //FİLE ALL DATA
db.set("data","value") //SET DATA
db.push("data","value") //PUSH CODE
db.push("data","value") //UNPUSH CODE
db.get("data") // GET DATA
db.has("data") // DATA TURE/FALSE ?
db.backup("FileName") //FİLE BACK UP
db.add("NUMBER_DATA",number) // Number +
db.remove("NUMBER_DATA",number) // Number -
db.deleteall() //FİLE DATA ALL DELETE
db.delete("data") //DELETE DATA
```

# LEVEL CODE
```js
client.on("message",message => {
  if(message.member.user.bot){return}
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
  level.addLevel(message,{antispam:true})

})
 client.login("<YOUR_TOKEN>")
```

# handler-code
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const Novader = require("novader")
  const handler = new Novader.CommandHandler(client,{prefix: "!",commandFile:"./cmmands",readyCommand:"> Ready Command [command]"})
  handler.CreateHandler()

  module.exports.run = async (message, client, args) => {
message.channel.send("Hi, Now Testting..")
};
module.exports.help = {
    name:"test",
    aliases:["novader"]
}
```



# Search Appearances
```js
//delete api
====> EXAMPLE
const Novader = require("novader")
const Search = new Novader.Search("You_Key");
async function Search() {
    let SearchVideo = await Search.SearchVideo("riv riv riv")
    console.log(SearchVideo)

    let getVideo = await SearchScript.VideoGet(elements.url)
    console.log(getVideo)
  
   let SpotifySearch = await SearchScript.GetSpotify("https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas")
      console.log(SpotifySearch)
      
  let Playlist = Search.Playlist("https://www.youtube.com/watch?v=82PsUyCKuUc&list=PLblKrj0aH7t6Me4jzOxNSIxC2Ki1qZmyG")
  console.log(Playlist)
```


## Links

- [Twitch](https://www.twitch.tv/erehizm)
- [NPM](https://www.npmjs.com/package/novader)
- [NPM.İO](https://npm.io/package/novader)
- [BYNOGAME_DESTEK/SUPPORT](https://www.bynogame.com/tr/destekle/erehizm)
