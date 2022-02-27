const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('error')
		.setDescription('Free errors, anyone?'),
	async run(interaction) {
		throw new Error('user ran the error command');
	},
};