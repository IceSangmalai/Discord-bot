const { Client, Intents, ClientPresence, UserFlags } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready to rock!');
	
});

client.on("ready", () => {

    let botStatus = [
        `Master`,
        `You`,
        `Deez Nuts`,
        `Minecraft Survival`,
        `Stanger Things`,
        `Booba`,
        `Anime`
    ]
    
    setInterval(() => {
        client.user.setActivity(`${botStatus[Math.floor(Math.random()* botStatus.length)]}`, {type: "WATCHING"})
    }, 36000);
    

})

client.login(token);