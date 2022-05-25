const { Client, Intents, ClientPresence, UserFlags } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log('Ready to rock!');
	
});

client.on("ready", () => {
    client.user.setPresence({
        activities: [{ 
          name: "with my master!",
          type: "STREAMING",  // LISTENING, WATCHING, COMPETING, STREAMING
		  url: "https://www.twitch.tv/icesywisy"
        }],
        status: "online" // online, idle, dnd, offline
    })
})

client.login(token);