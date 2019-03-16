const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!kgmalden') {
    msg.reply('Grade KG auf Malden [Joinen]');
  }
});

client.on('message', msg => {
  if (msg.content === '!kgtanoa') {
    msg.reply('Grade KG auf Malden [Joinen]');
  }96
});

client.on('message', msg => {
  if (msg.content === '!kgaltis') {
    msg.reply('Grade KG auf Altis [Joinen]');
  }
});


client.login(process.env.BOT_TOKEN);
