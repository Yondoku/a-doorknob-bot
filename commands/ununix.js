const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ununix')
		.setDescription('Convert a UNIX timestamp to a time and date. Double negative, though.')
		.addNumberOption(option =>
		option.setName('stamp')
			.setDescription('stamp: UNIX timestamp to convert, in seconds')
			.setRequired(true)),
	async run(interaction) {
			let stamp = interaction.options.getNumber('stamp');
			stamp *= 1000;
			await interaction.reply((new Date(stamp)).toLocaleString('en-US') + ' GMT');
	},
};