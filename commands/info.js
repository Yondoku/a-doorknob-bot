const { MessageEmbed } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('Bot information. Wow, how surprising.'),
	async run(interaction) {
		const exampleEmbed = {
			color: 0x559a72,
			title: 'A Doorknob?',
			url: 'https://www.youtube.com/watch?v=iik25wqIuFo',
			description: `A Doorknob? is a bot made by me, marsus16112#0900, in discord.js v13. This bot's main purpose is fun, and also random bits of randomness here and there. So, yeah. That's pretty much it. What did you expect?`
		};
		await interaction.reply({embeds: [exampleEmbed]})
	},
};