
const Discord = require("discord.js");
const client = new Discord.Client();

console.log("Welcome Again !");

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('489465001229287437');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});

client.login("NDY4ODE0MzAzOTg2NzEyNTg5.DnRvbA.vZk96mAw4Rh6aZMIIJkmrymSE6I");
