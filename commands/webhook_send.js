const { SlashCommandBuilder } = require('@discordjs/builders');
const { WebhookClient, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('webhook_send')
		.setDescription('Tired of APIing your way to Webhookland? You can use this!').addStringOption(option =>
		option.setName('link')
			.setDescription('link: the webhook link')
			.setRequired(true))
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: text to send to the webhook')
			.setRequired(true)),
	async run(interaction) {
		if (!interaction.member.has(Permissions.FLAGS.MANAGE_WEBHOOKS)) return await interaction.reply("You need the Manage Webhooks permission to use this command.")
		let link = interaction.options.getString('link'), input = interaction.options.getString('input');
		const webhookClient = new WebhookClient({url: link});
		webhookClient.send(input);
		await interaction.reply({content: 'Sent to webhook!', ephemeral: true});
	},
};