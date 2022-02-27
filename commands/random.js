const { SlashCommandBuilder } = require('@discordjs/builders');
const { readFileSync } = require('fs');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('random')
		.setDescription('From our list of random nouns, verbs, and fortunes, to you!')
	.addSubcommand(subcommand => subcommand.setName('noun').setDescription('subcommand_noun: random noun'))
	.addSubcommand(subcommand => subcommand.setName('verb').setDescription('subcommand_verb: random verb'))
	.addSubcommand(subcommand => subcommand.setName('fortune').setDescription('subcommand_fortune: random miscellaneous fortune from the wellknown fortune unix program')),
	async run(interaction) {
		let command = interaction.options.getSubcommand();
		if (command == 'noun') {
				let objs = readFileSync('objs.txt', 'utf8').toString().split('\n');
				await interaction.reply(objs[Math.floor(Math.random() * objs.length)]);
		} else if (command == 'verb') {
				let verbs = readFileSync('verbs.txt', 'utf8').toString().split('\n');
				await interaction.reply(verbs[Math.floor(Math.random() * verbs.length)]);
		} else if (command == 'fortune') {
				let phrases = readFileSync('wisewords.txt', 'utf8').toString().split('%').map(x => x.trim());
				await interaction.reply(phrases[Math.floor(Math.random() * phrases.length)]);
		}
	},
};