const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tall')
		.setDescription('make characters taller')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: text to convert')
			.setRequired(true)),
	async run(interaction) {
		let string = interaction.options.getString('input');
		string = [...string].map(x => `${x}\u030e\u030e\u030e\u030e\u030e\u030e\u030e\u030e\u030e\u030e`);
		await interaction.reply(string.join(''));
	},
};