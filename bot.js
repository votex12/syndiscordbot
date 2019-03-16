const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!kgmalden') {
    msg.reply('Es läuft momentan ein KG auf malden von uns');
  }
});

client.on('message', msg => {
  if (msg.content === '!kgtanoa') {
    msg.reply('Es läuft momentan ein KG auf Tanoa von uns');
  }96
});

client.on('message', msg => {
  if (msg.content === '!kgaltis') {
    msg.reply('Es läuft momentan ein KG auf Altis von uns');
  }
});


client.login(process.env.BOT_TOKEN);
