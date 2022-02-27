const { SlashCommandBuilder } = require('@discordjs/builders');
const { readFileSync } = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('verb')
		.setDescription('Generate a random verb. Verbosity!'),
	async run(interaction) {
		let verbs = readFileSync('verbs.txt', 'utf8').toString().split('\n');
		await interaction.reply(verbs[Math.floor(Math.random() * verbs.length)]);
	},
};