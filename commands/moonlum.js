const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('moonlum')
		.setDescription("Get an approximation of the Moon's current illumination. Won't be very accurate.")		,		
	async run(interaction) {
		let time = new Date() / 1000 / 86400;
		let sinceNew = (time - 19024.24096064815) % 29.53087;
		let per = 50 * (Math.cos(((sinceNew / 29.53087 * 360) - 180) * Math.PI / 180) + 1);
		await interaction.reply(`Moon illumination: ${per.toFixed(7)}%`);
	},
};