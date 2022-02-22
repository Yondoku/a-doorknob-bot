const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('suggest')
		.setDescription('Suggest stuff to me. I don\'t have infinite ideas, remember?')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: stuff to suggest')
			.setRequired(true)),
	async run(interaction, client) {
		const user = await client.users.fetch('671264149745041408'), string = interaction.options.getString('input');
		user.send(`Suggestion from ${interaction.user.tag}:\n\n${string}`);
		await interaction.reply('Suggestion has been sent!')
	},
};