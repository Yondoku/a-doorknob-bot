const { SlashCommandBuilder } = require('@discordjs/builders');
const { readFileSync } = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('wisewords')
		.setDescription('Wise words from the well-known fortune program.'),
	async run(interaction) {
		let phrases = readFileSync('wisewords.txt', 'utf8').toString().split('%').map(x => x.trim());
		await interaction.reply(phrases[Math.floor(Math.random() * phrases.length)]);
	},
};