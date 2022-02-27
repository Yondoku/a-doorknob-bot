const { SlashCommandBuilder } = require('@discordjs/builders');
const { WebhookClient, Permissions } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('webhook')
		.setDescription('Manage webhooks. Surprising, is it not?')
	.addSubcommand(subcommand =>
		subcommand
			.setName('create').setDescription('subcommand_create: create a new webhook')
			.addStringOption(option => option.setName('name').setDescription('name: the name of the webhook').setRequired(true))
			.addStringOption(option =>
option.setName('imageurl').setDescription('imageurl: a link to an image for the webhook pfp')))
	.addSubcommand(subcommand =>
		subcommand
			.setName('send')	.setDescription('subcommand_send: send messages to a webhook')
.addStringOption(o => o.setName('content').setDescription('content: the content to send').setRequired(true))
.addStringOption(o => o.setName('url').setDescription('url: a link to a webhook to send content to').setRequired(true))),
	async run(interaction) {
			if (!interaction.member.permissions.has(Permissions.FLAGS.MANAGE_WEBHOOKS)) return await interaction.reply("You need the Manage Webhooks permission to use this command.");

			if (interaction.options.getSubcommand() == 'create') {
				let name = interaction.options.getString('name');
				let imageurl = {avatar: interaction.options.getString('imageurl')}
				imageurl = imageurl.avatar? imageurl: {};
				interaction.channel.createWebhook(name, imageurl).then(async e => {await interaction.reply({content:`Webhook created; you can edit it in Integrations settings. Pass the link ${e.url} to the send subcommand to send messages with the webhook.`,ephemeral:true})}).catch(async _ => await interaction.reply({content:'There was an error. Check to confirm that the image link or name you provided is valid.',ephemeral:true}));
			} else if (interaction.options.getSubcommand() == 'send') {
				let url = interaction.options.getString('url'), content = interaction.options.getString('content');
				const webhookClient = new WebhookClient({url});
				webhookClient.send(content);
				await interaction.reply({content: 'Sent to webhook!', ephemeral: true});
			} 
	},
};