const { SlashCommandBuilder } = require('@discordjs/builders');
const { readFileSync } = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('object')
		.setDescription('Generate a random object. Woohoo! I am so happy about this information.'),
	async run(interaction) {
		let objs = readFileSync('objs.txt', 'utf8').toString().split('%').map(x => x.trim());
		await interaction.reply(objs[Math.floor(Math.random() * objs.length)]);
	},
};