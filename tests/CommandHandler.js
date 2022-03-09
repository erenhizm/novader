 const Novader = require("novader")
 
 const handler = new Novader.CommandHandler(client,{prefix: "e!",commandFile:"./komutlar",readyCommand:"> Ready Command [command]"})
  handler.CreateHandler()
//readyCommand not so compulsory
//prefix not compulsory
//commandFile so compulsory
