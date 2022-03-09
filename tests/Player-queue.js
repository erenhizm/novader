const Novader = require("novader")
const queue = new Novader.Queue({"Youtube":"YOUTUBE_APİ_KEY"});  
queue.set("123",elements.url) //video Data Create and Set
  queue.has() //Queue TRUE/FALSE
  queue.get("123") //Queue Get "Queue_Namme"
  queue.delete("123") //Queue Delete "Queue_Namme"
  queue.SkipToNext("123") //Video Skip To Nexted (Beta)
