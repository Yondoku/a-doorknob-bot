const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('xhpp')
		.setDescription("convert text to xue hua piao piao text")
				.addStringOption(option =>
		option.setName('input')
			.setDescription('input: text to convert')
			.setRequired(true)),
	async run(interaction) {
		let string = interaction.options.getString('input');
		string = [...string]
		// inefficient, tbh
		let conversions = [[/A/gi, 'xue '],
		[/B/gi, 'hua '],
		[/C/gi, 'piao '],
		[/D/gi, 'bei '],
		[/E/gi, 'feng '],
		[/F/gi, 'xiao '],
		[/G/gi, 'tian '],
		[/H/gi, 'di '],
		[/I/gi, 'yi '],
		[/J/gi, 'pian '],
		[/K/gi, 'cang '],
		[/L/gi, 'mang '],
		[/M/gi, 'jian '],
		[/N/gi, 'han '],
		[/O/gi, 'mei '],
		[/P/gi, 'ao '],
		[/Q/gi, 'li '],
		[/R/gi, 'zhong '],
		[/S/gi, 'zhi '],
		[/T/gi, 'wei '],
		[/U/gi, 'ren '],
		[/V/gi, 'xiang '],
		[/W/gi, 'ai '],
		[/X/gi, 'wo '],
		[/Y/gi, 'suo '],
		[/Z/gi, 'wu '],
		[/\./gi, 'yuan '],
		[/\!/gi, 'ci '],
		[/\!/gi, 'qing '],
		[/\,/gi, 'chang ']];
		string.forEach((e, i) => {
			for (let c of conversions) {
				if (e.match(c[0])) string[i] = c[1];
			}
		})
		await interaction.reply(string.join(''));
	},
};