const { SlashCommandBuilder } = require('@discordjs/builders');
const { readdirSync, readFileSync } = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('trash')
		.setDescription("This is ACTUAL trash."),		
	async run(interaction) {
		let dir = readdirSync('./trash');
		let image = './trash/' + dir[Math.floor(Math.random() * dir.length)];
		if (Math.floor(Math.random() * 25) == 4 || interaction.user.id == '530310292564082698') image = interaction.user.displayAvatarURL();
		await interaction.reply({files: [image]});
	},
};