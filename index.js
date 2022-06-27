const { Client, Intents, ClientPresence, UserFlags, Options, MessageSelectMenu } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on('interactionCreate', interaction => {
	console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
});


client.on("ready", () => {
    let botStatus = [
        `online`,
        `idle`,
        `dnd`
    ]

    setInterval(() => {
        client.user.setStatus(`${botStatus[Math.floor(Math.random()* botStatus.length)]}`);
    }, 36000);
    
    let botActivity = [
        `Master`,
        `You`,
        `Deez Nuts`,
        `Minecraft Survival`,
        `Stanger Things`,
        `Booba`,
        `You suffer`,
        `Anime`
    ]

    setInterval(() => {
        client.user.setActivity(`${botActivity[Math.floor(Math.random()* botActivity.length)]}`, {type: "WATCHING"})
    }, 36000);
    

})

client.on('interactionCreate', async interaction => {

	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
        await interaction.reply(`Pong! That took you ${client.ws.ping} ms.`);
	} else if (interaction.commandName === 'user') {
        await interaction.reply(`Your amazing profile picture ${interaction.user.displayAvatarURL(false)}`);


    } else if (interaction.commandName === 'server') {
        await interaction.reply(`Server name: ${interaction.guild.name} \nTotal member: ${interaction.guild.memberCount}`);
    }
});

client.on("message", (msg) => {
    if (message.content === "hello") {
        msg.channel.send("Hello");
    }
});

client.login(token);