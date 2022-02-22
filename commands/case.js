const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('case')
		.setDescription('uppercase, lowercase, all the cases! convert text to both cases!')
		.addStringOption(option => 
		option.setName('case')
			.setDescription('case: lower or upper')
			.setRequired(true)
			.addChoice('lower', 'lower')
			.addChoice('upper', 'upper'))
		.addStringOption(option => 
		option.setName('input')
			.setDescription('input: text to convert')
			.setRequired(true)
		),
	async run(interaction) {
		let case_ = interaction.options.getString('case'), string = interaction.options.getString('input');
		if (case_ == 'lower') await interaction.reply(string.toLowerCase());
		if (case_ == 'upper') await interaction.reply(string.toUpperCase());
	},
};