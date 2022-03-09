const Novader = require("novader.js")
const db = new Novader.Database({"file":"./datas.json"});
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
