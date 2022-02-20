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
		string = [...string];		// inefficient, tbh
		let conversions = [[/a/gmi, 'xuě'],
[/b/gmi, 'huā'],
[/c/gmi, 'piāo'],
[/d/gmi, 'běi'],
[/e/gmi, 'fēng'],
[/f/gmi, 'xiāo'],
[/g/gmi, 'tiān'],
[/h/gmi, 'dì'],
[/i/gmi, 'yí'],
[/j/gmi, 'piàn'],
[/k/gmi, 'cāng'],
[/l/gmi, 'máng'],
[/m/gmi, 'yì'],
[/n/gmi, 'jiǎn'],
[/o/gmi, 'hán'],
[/p/gmi, 'méi'],
[/q/gmi, 'ào'],
[/r/gmi, 'lì'],
[/s/gmi, 'zhōng'],
[/t/gmi, 'zhǐ'],
[/u/gmi, 'wéi'],
[/v/gmi, 'yī'],
[/w/gmi, 'rén'],
[/x/gmi, 'xiāng'],
[/y/gmi, 'ài'],
[/z/gmi, 'wǒ'],
[/0/gmi, 'suǒ'],
[/1/gmi, 'wú'],
[/2/gmi, 'yuàn'],
[/3/gmi, 'huǐ'],
[/4/gmi, 'cǐ'],
[/5/gmi, 'qíng'],
[/6/gmi, 'cháng'],
[/7/gmi, 'liú'],
[/8/gmi, 'xīn'],
[/9/gmi, 'jiān']];
		string.forEach((e, i) => {
			for (let c of conversions) {
				if (e.match(c[0])) string[i] = c[1];
			}
		})
		await interaction.reply(string.join(' '));
	},
};