const Novader = require("novader")
const eco = new Novader.Economy();   
//Account Create
    eco.on("EcconomyCreate", cash => {
      console.log(cash) 
     // { id: '1000', money: 0, name: 'test', createdAt: '<A_D>' }
    })
    eco.AccountCreate({name:"test",id:"1000"})

    //Account SET
    eco.on("EcconomySeted",cash => {
     console.log(cash)
     // => {name: 'test',id: '1000',money: 2, get: { oldMoney: 1, newMoney: 2, Seted: 1, createdAt: '<A_D>', ActionDate: '<A_D>'}}
    })
    eco.set("1000",10)

    //Account RECEİVE
    eco.on("EcconomyReceiveded",cash => {
     console.log(cash)
    // => {name: 'test',id: '1000',money: 1, get: { oldMoney: 2, newMoney: 1, Receved: 1 createdAt: '<A_D>', ActionDate: '<A_D>'}}
    })
 eco.Receive("1000",1)

 //Delete/Reset Accounts to
 eco.reset()

   //Account HAS/NONE
console.log(eco.has("1000"))
    //true / false

    //Account İNFO
console.log("Account İNFO: ",eco.Account("1000"))
   //Account İNFO:  { name: 'test', money: 18, createdAt: '<A_D>' }
