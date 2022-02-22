const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('trim')
		.setDescription('Trim whitespace from the start and end of text.')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: text to trim')
			.setRequired(true)),
	async run(interaction) {
		let string = interaction.options.getString('input');
		await interaction.reply(string.trim());
	},
};