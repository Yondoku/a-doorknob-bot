const { SlashCommandBuilder } = require('@discordjs/builders');
const { readdirSync } = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('The store will close in 15 minutes.'),
	async run(interaction) {
		let commands = readdirSync('./commands');
		await interaction.reply(`There are **${commands.length}** commands so far. Here's a list of them all:\n\n${commands.join(', ')}\n\nThe description of each command will show how to use it.`);
	},
};