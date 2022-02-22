const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("nggyu")
		.setDescription("convert text to never gonna give you up text")
				.addStringOption(option =>
		option.setName("input")
			.setDescription("input: text to convert")
			.setRequired(true)),
	async run(interaction) {
		let string = interaction.options.getString("input");
		string = [...string];		// inefficient, tbh
		let conversions = [[/a/gmi, "i"],
[/b/gmi, "just"],
[/c/gmi, "wanna"],
[/d/gmi, "tell"],
[/e/gmi, "you"],
[/f/gmi, "how"],
[/g/gmi, "i'm"],
[/h/gmi, "feeling"],
[/i/gmi, "gotta"],
[/j/gmi, "make"],
[/k/gmi, "understand"],
[/l/gmi, "never"],
[/m/gmi, "gonna"],
[/n/gmi, "give"],
[/o/gmi, "up"],
[/p/gmi, "let"],
[/q/gmi, "down"],
[/r/gmi, "run"],
[/s/gmi, "around"],
[/t/gmi, "and"],
[/u/gmi, "desert"],
[/v/gmi, "cry"],
[/w/gmi, "say"],
[/x/gmi, "goodbye"],
[/y/gmi, "a"],
[/z/gmi, "lie"],
[/\./gmi, "hurt"]];
		string.forEach((e, i) => {
			for (let c of conversions) {
				if (e.match(c[0])) string[i] = c[1];
			}
		})
		await interaction.reply(string.join(" "));
	},
};