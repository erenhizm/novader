const Novader = require("novader")
const scs = new Novader.Search("YOUTUBE_APİ_KEY");  
let SearchVideo = await scs.SearchVideo("PAPARAZZİ")
console.log(SearchVideo)
let getVideo = await scs.VideoGet("https://www.youtube.com/watch?v=zrcOsxFxqG0")
console.log(getVideo)
