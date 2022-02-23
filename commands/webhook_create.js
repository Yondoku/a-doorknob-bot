const { SlashCommandBuilder } = require('@discordjs/builders');
const { WebhookClient, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('webhook_create')
		.setDescription('Create webhooks. Surprising, is it not?')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: webhook name')
			.setRequired(true)),
	async run(interaction) {
			if (!interaction.member.has(Permissions.FLAGS.MANAGE_WEBHOOKS)) return await interaction.reply("You need the Manage Webhooks permission to use this command.");
		let input = interaction.options.getString('input');
		interaction.channel.createWebhook(input).then(async e => {await interaction.reply({content:`Webhook created! Pass the link ${e.url} to the webhook_send command to send messages with the webhook!`,ephemeral:true})});
	},
};