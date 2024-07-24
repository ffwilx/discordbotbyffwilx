const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`
   __ _ _ _ _ _ _ _ _ _ _
  | powitalnia dziala ✅ |
  | status dziala ✅     |
  | say dziala ✅        |
  | weryfikacja dziala ✅|
  |__ _ _ _ _ _ _ _ _ _ _ |`);

  client.user.setActivity('wilx bot', {type: "PLAYING"})

  
});

client.on('guildMemberAdd', async (member) => {
  const welcomeChannel = member.guild.channels.cache.get('1155231504885104710');

  if (!welcomeChannel) return;

  welcomeChannel.send(`**Witaj** ${member}! Życzmy ci milego dnia wilx topka`); });

  client.on('message', (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith('!')) return;
  
    const args = message.content.slice(1).trim().split(' ');
    const command = args.shift().toLowerCase();
  
    if (command === 'say') {
      const text = args.join(' ');
      message.channel.send(text);
    }
  });
  

  client.on('message', message => {
    if (message.content === '!verify') {
      
      let role = message.guild.roles.cache.find(role => role.name === "│😾│Obywatel");
      message.member.roles.add(role);
      
      message.reply('Gratulacje! Zostałeś zweryfikowany!');
    }
  });
  

const prefix = '!';

client.on('ready', () => {
    console.log(`${client.user.tag}`);
});

client.on('message', (message) => {
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'ban') {
        if (!message.member.hasPermission('BAN_MEMBERS')) {
            return message.reply('Nie masz wymaganych uprawnień do wykonania tej komendy!');
        }

        if (args.length === 0) {
            return message.reply('Nie podano użytkownika do zbanowania!');
        }

        const member = message.mentions.members.first();

        if (!member) {
            return message.reply('Nie można odnaleźć podanego użytkownika!');
        }

        member.ban()
            .then(() => {
                message.reply(`${member.user.tag} został zbanowany!`);
            })
            .catch((error) => {
                console.error(error);
                message.reply('Wystąpił błąd podczas banowania użytkownika.');
            });
    }
});

const allowedRole = '1124100637878140938'; 

client.on('ready', () => {
  console.log(`Zalogowany jako ${client.user.tag}`);
});

client.on('message', (message) => {
  if (message.content.includes('http') || message.content.includes('www')) {
    const member = message.guild.member(message.author);
    if (!member.roles.cache.has(allowedRole)) {
      message.delete();
      message.reply('Linki są zabronione dla Twojej roli!');
    }
  }
});


client.once('ready', () => {
    console.log('Bot jest gotowy.');

    const embedMessage = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Bot Działa')
        .setDescription('Wysyłam tu wiadomości jak będę działać.');

    const channel = client.channels.cache.get('1138549812652937227');
    channel.send(embedMessage);
});



client.on('message', message => {
  if (message.content === '!pomoc') {
    const embed = new Discord.MessageEmbed()
      .setTitle('System - wilx bot')
      .setDescription('')
      .setColor('#38FFFF')
      .addField('Command List', '1. !ip')
      .setFooter('wilx bot');

    message.channel.send(embed);
  }
});



client.on('message', message => {
  if (message.content === '!ip') {
    const embed = new Discord.MessageEmbed()
      .setTitle('System - wilx bot')
      .setDescription('')
      .setColor('#38FFFF')
      .addField('IP serwera:', 'connect xxxx.pl')
      .setFooter('wilx bot');

    message.channel.send(embed);
  }
});

client.on('ready', () => {
    console.log(`${client.user.tag}!`);

    
});


client.login('');




