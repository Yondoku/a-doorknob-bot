const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('copy')
		.setDescription("Copy text. But remember, don't copy that floppy!")
				.addStringOption(option =>
		option.setName('input')
			.setDescription('input: text to copy')
			.setRequired(true)),
	async run(interaction) {
		let string = interaction.options.getString('input');
		string = string.includes('floppy') ? "Don't Copy That Floppy!" : string;
		await interaction.reply(string);
	},
};