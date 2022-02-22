const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('code')
		.setDescription("Guess the 4-digit code. You'll know how many digits are correct, and how many are in the code."),
	async run(interaction) {
		await interaction.reply('Game start!');
		const filter = m => m.author.id == interaction.user.id;
	  const collector = interaction.channel.createMessageCollector({filter, time: 120_000, max: 10});
		
		let code = [0,0,0,0].map(_ => Math.floor(Math.random() * 10)), attemptsLeft = 10;
		console.log(code);
		collector.on('collect', async r => {
			if (r.content.length != 4 || !+r) return interaction.channel.send(`Invalid code. ${--attemptsLeft} attempts left.`);
			
			let guess = r.content.split('').map(x=>+x);
	
			let correct = 0;
			if (guess[0] == code[0]) correct++;
			if (guess[1] == code[1]) correct++;
			if (guess[2] == code[2]) correct++;
			if (guess[3] == code[3]) correct++;
			if (correct == 4) {
				collector.stop();
				return await interaction.followUp('Correct!');
			}
			let inCode = 0;
			if (code.includes(guess[0])) inCode++;
			if (code.includes(guess[1])) inCode++;
			if (code.includes(guess[2])) inCode++;
			if (code.includes(guess[3])) inCode++;

			interaction.channel.send(`${correct} correct, ${inCode} in code. ${--attemptsLeft} attempts left.`);
		});
	},
};