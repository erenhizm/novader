const Discord = require("discord.js")
const Client = new Discord.Client()
const Novader = require("novader")
const ops = {"prefix": "!","commandFile":"./cmmands","readyCommand":"> Ready Command [command]"}
const Handler = new Novader.CommandHandler(client,ops)
Handler.CreateHandler()
