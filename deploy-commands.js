const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId } = require('./config.json');

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}const rest = new REST({ version: '9' }).setToken(process.env.token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('registered dumbo'))
	.catch(x=>console.log('3'));