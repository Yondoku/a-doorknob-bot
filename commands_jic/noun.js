const { SlashCommandBuilder } = require('@discordjs/builders');
const { readFileSync } = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('noun')
		.setDescription('Generate a random noun. Woohoo! I am so happy about this information.'),
	async run(interaction) {
		let objs = readFileSync('objs.txt', 'utf8').toString().split('\n');
		await interaction.reply(objs[Math.floor(Math.random() * objs.length)]);
	},
};