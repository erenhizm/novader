module.exports.run = async (message, client, args) => {
message.channel.send(client.ws.ping)
};
module.exports.help = {
    name:"ping",
    aliases:["dley","bot-ws","bot-ping"]
}
