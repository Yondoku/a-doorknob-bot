const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('reverse')
		.setDescription('Reverse text with this command. Self-explanatory. A favorite for "quirky" humans.')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: text to reverse')
			.setRequired(true)),
	async run(interaction) {
		let string = interaction.options.getString('input');
		await interaction.reply(`${[...string].reverse().join('')}`);
	},
};