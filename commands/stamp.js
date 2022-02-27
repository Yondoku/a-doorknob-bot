const { SlashCommandBuilder, time } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stamp')
		.setDescription('Convert a UNIX timestamp to a Discord time string.')
		.addNumberOption(option =>
		option.setName('stamp')
			.setDescription('stamp: UNIX timestamp to convert, in seconds')
			.setRequired(true))
		.addStringOption(option =>
		option.setName('flag')
			.setDescription('flag: time string type')
			.setRequired(true)
			.addChoice('short: hour, minute', 't')
		  .addChoice('long: hour, minute, second', 'T')
			.addChoice('short: day, month, year', 'd')
			.addChoice('long: day, month, year', 'D')
      .addChoice('short: date, time', 'f')
      .addChoice('long: date, time', 'F')
      .addChoice('relative time from now', 'R')),
	async run(interaction) {
			let stamp = interaction.options.getNumber('stamp'), flag = interaction.options.getString('flag');
			stamp *= 1000;
			await interaction.reply(time(new Date(stamp), flag));
	},
};