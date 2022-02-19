const { SlashCommandBuilder } = require('@discordjs/builders');
const Canvas = require('canvas');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('csscolor')
		.setDescription('CSS Color Names? Hexadecimal? This command will preview CSS colors.')
		.addStringOption(option =>
		option.setName('color')
			.setDescription('color: valid css color')
			.setRequired(true)),
	async run(interaction) {
		const { MessageAttachment } = require('discord.js');
		let c = interaction.options.getString('color');
		const canvas = Canvas.createCanvas(100, 100);
		const context = canvas.getContext('2d');
		context.fillStyle = c;
		context.fillRect(0, 0, canvas.width, canvas.height);	
		const attachment = new MessageAttachment(canvas.toBuffer(), 'csscolor.png');
		await interaction.reply({ files: [attachment] });
	},
};