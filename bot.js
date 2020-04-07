const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("697060498121818145")
setInterval(function() {
channel.send(`Spam Spam Spam Spam Spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);