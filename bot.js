const Discord = require('discord.js');
const client = new Discord.Client(); 
var prefix = "+";
const fs = require("fs"); 
const canvas = require("canvas");
const moment = require("moment");  
const jimp = require('jimp');   

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    });
    client.on('message', message => {
    if (message.content === '!') {
    message.channel.send('**WELCOME TO LEVEL SHOP :tada: :champagne_glass:**');
    }
    });
    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        });
        client.on('message', message => {
        if (message.content === 'knd') {
        message.channel.send('**https://discord.gg/jC5m8yu**');
        }
        });
    client.on("ready", async => {
    setInterval(function(){
    client.channels.find('id', '484131575152377894').setName("We");
    client.channels.find('id', '484131575152377894').setName("Wel");
    client.channels.find('id', '484131575152377894').setName("Welc");
    client.channels.find('id', '484131575152377894').setName("Welco");
    client.channels.find('id', '484131575152377894').setName("Welcom");
    client.channels.find('id', '484131575152377894').setName("Welcome");
    client.channels.find('id', '484131575152377894').setName("Welcome T");
    client.channels.find('id', '484131575152377894').setName("Welcome To");
    client.channels.find('id', '484131575152377894').setName("Welcome To L");
    client.channels.find('id', '484131575152377894').setName("Welcome To LE");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEV");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEVE");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEVEL");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEVEL S");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEVEL SH");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEVEL SHO");
    client.channels.find('id', '484131575152377894').setName("Welcome To LEVEL SHOP");
    }, 3000);
    });
    ////////////////////////////////////////////////////////////////////////////////////////
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('484131445489795091');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});
////////////////////////////////////////////////////////////////////////////////////////
var guilds = {};
client.on('guildBanAdd', function(guild) {
const rebellog = client.channels.find("name", "logs"),
Onumber = 3,
Otime = 10000
guild.fetchAuditLogs({
type: 22
}).then(audit => {
let banner = audit.entries.map(banner => banner.executor.id)
let bans = guilds[guild.id + banner].bans || 0
guilds[guild.id + banner] = {
bans: 0
}
bans[guilds.id].bans += 1;
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
guild.guild.member(banner).kick();
} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
setTimeout(() => {
guilds[guild.id].bans = 0;
},Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
let channelc = {};
client.on('channelCreate', async (channel) => {
const rebellog = client.channels.find("name", "logs"),
Oguild = channel.guild,
Onumber = 3,
Otime = 10000;
const audit = await channel.guild.fetchAuditLogs({limit: 1});
const channelcreate = audit.entries.first().executor;
console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
if(!channelc[channelcreate.id]) {
channelc[channelcreate.id] = {
created : 0
}
}
channelc[channelcreate.id].created += 1;
if(channelc[channelcreate.id].created >= Onumber ) {
Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
setTimeout(() => {
channelc[channelcreate.id].created = 0;
},Otime)
});
let channelr = {};
client.on('channelDelete', async (channel) => {
const rebellog = client.channels.find("name", "logs"),
Oguild = channel.guild,
Onumber = 3,
Otime = 10000;
const audit = await channel.guild.fetchAuditLogs({limit: 1});
const channelremover = audit.entries.first().executor;
console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
if(!channelr[channelremover.id]) {
channelr[channelremover.id] = {
deleted : 0
}
}
channelr[channelremover.id].deleted += 1;
if(channelr[channelremover.id].deleted >= Onumber ) {
Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
setTimeout(() => {
channelr[channelremover.id].deleted = 0;
},Otime)
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 10,
        maxAge: 86400,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم أرسال الرابط برسالة خاصة :link:")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : يوم | عدد استخدامات الرابط : 10 **")
      message.author.sendEmbed(Embed11)
    }
}); 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
    var prefix = "+";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **لا يوجد لديك صلاحية لمسح الشات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم مسح الشات",
        color: 0x06DF00,
        description: "تم مسح الرسائل ",
        footer: {
          text: "Level Shop $"
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'الكلمة') {
              message.channel.send('**الرد**');
              message.channel.sendFile("./photoshop.PNG");
               

            }
});

client.on("message", message => {
    var prefix = "+";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });


const sWlc = {}
const premium = ['389090790984515594']
client.on('message', message => {
var prefix = "+";
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "ls-chat"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});
 


client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "ls-chat"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
         
      var Canvas = require('canvas')
      var jimp = require('jimp')
      
      const w = ['PicsArt_07-17-07.58.02 (1).png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '19px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Welcome To ${member.guild.name}`, 245, 80);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });




client.login(process.env.BOT_TOKEN);
