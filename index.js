const { Client, Intents, ClientPresence, UserFlags, Options, MessageSelectMenu } = require('discord.js');
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

client.on('interactionCreate', async interaction => {

	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
        await interaction.reply(`Pong! That took you ${client.ws.ping} ms.`);
	} else if (interaction.commandName === 'user') {
        await interaction.reply(`Your amazing profile picture` + `${interaction.user.displayAvatarURL(true)}`);


    } else if (interaction.commandName === 'server') {
        
    }
});

client.login(token);