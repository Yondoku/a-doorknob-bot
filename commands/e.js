const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('e')
		.setDescription('eval js code (for owner and for bot devs only)')
		.addStringOption(option =>
		option.setName('input')
			.setDescription('input: code to eval')
			.setRequired(true)),
	async run(interaction) {
		if (interaction.user.id !== '671264149745041408') return await interaction.reply('You can\'t run this command. You need to be a bot developer/the owner.')
		let string = interaction.options.getString('input');
		try {
			eval(`(async _ => {${string}})();`);
      interaction.reply('Done!');		
		} catch(e) {
			await interaction.reply(`Error: ${e}`);
		}
	},
};