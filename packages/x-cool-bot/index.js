require("dotenv").config();
const express = require("express");
const { Client, Intents } = require("discord.js");

const app = express();

function run() {
	const client = new Client({
		intents: [
			Intents.FLAGS.GUILDS,
			Intents.FLAGS.GUILD_MESSAGES,
		],
	});

	client.on("ready", function (e) {
		console.log(`Logged in as ${client.user.tag}!`);
	});

	client.on("message", function (msg) {
		if (msg.content === "!Yo coordinator") {
			msg.reply("Howdy!");
		}
	});
	client.login(process.env.DISCORD_BOT_TOKEN);
}
const port = process.env.PORT || 8081;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	run();
});

module.exports = app;
