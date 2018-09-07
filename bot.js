
const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = '!';
Client.on('message' , message => {
  if(message.content.startsWith(prefix + voicesetup)) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('x you dont have the permeissions');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('i dont have permissions');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send('__you must type 0 in the room name __');
  if(!args) args = `VoiceOnline [ ${message.guild.members.filter(s = s.voiceChannel).size} ]`;
  message.channel.send('» Done');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s = s.voiceChannel).size)}`, 'voice').then(c = {
    c.overwritePermissions(message.guild.id, {
      CONNECT false,
      SPEAK false
    });
    setInterval(() = {
      c.setName(`${args.replace(0, message.guild.members.filter(s = s.voiceChannel).size)}`).catch(err = {
        if(err) return;
      });
    },3000);
  });
  }
});
client.login(process.env.BOT_TOKEN);
