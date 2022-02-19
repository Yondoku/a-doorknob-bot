const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.data.name, command);
}
client.once('ready', () => {
	console.log('Ready!');
	client.user.setActivity(`${commandFiles.length} commands so far`);
	client.user.setStatus('idle');
});
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

		const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.run(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error. Try again later.', ephemeral: true });
	}


});


// Login
client.login(process.env.token);