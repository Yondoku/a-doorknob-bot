const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('60')
		.setDescription('60 seconds of, well, nothing. Hey, at least you get to know the bot is thinking, I guess.'),
	async run(interaction) {
		await interaction.deferReply();
		await wait(60000);
		await interaction.editReply("That's all.")
	},
};