const player = new Novader.Player("YOUTUBE_APİ_KEY");

await player.play("video NAME/URL") //VİDEO PLAY CODE
await player.getInfo("video NAME/URL",0) /// Enter the sequence number of the video to be selected 0/5
player.leave() //Sudden Exit from the Current Channel (BETA)
player.isPlaying() //is Playing => True Else Falase (BETA)
player.setVol(0.5) //set Volume (BETA)
