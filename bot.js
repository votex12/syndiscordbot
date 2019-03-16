const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!kgmalden') {
    msg.reply('KG auf Malden!');
  }
});

client.on('message', msg => {
  if (msg.content === '!kgtanoa') {
    msg.reply('KG auf Malden!');
  }96
});

client.on('message', msg => {
  if (msg.content === '!kgaltis') {
    msg.reply('KG auf Altis!');
  }
});


client.login(process.env.BOT_TOKEN);
