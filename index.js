const Discord = require("discord.js");
const client = new Discord.Client();
var bot = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame("/network help | HatleKan Bot");
  console.log("Reload Completed!");
});

const prefix = "/network ";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content === (prefix + "discord")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__HatleKan Discord:__\n \n",
      description: "** **\nhttps://discord.gg/FBWC9cp",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
  } else
  if (message.content === (prefix + "apply")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Apply:__\n \n",
      description: "** **\n"https://goo.gl/forms/BJwPkqXXXV0ltE943"
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
  } else
  if (message.content === (prefix + "creator")) {
    message.channel.send("The Creator of the Bot is `Marshi [DEVELOPER]#0526`")
`");
  } else
  if (message.content === (prefix + "invite")) {
    message.author.sendMessage("**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=426357120993198090&permissions=0&scope=bot");
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "help")) {
    message.author.sendMessage({embed: {
     color: 0xbf0000,
     title: "__Hatlekan Commands:__\n \n",
     description: "** **\n**/network discord ** - Discord Link\n**/network creator** - The Creators of the Bot\n**/network apply** - Staff Apply\n**/network ping** - Show to you how much Ping you have\n**/network youtube** - Show to you the link to Youtube Channel\n**/network ip** - the IP of the Server\n**/network vote** - Vote Link\n**/network avatar** - show your avatar profile\n**/network ranks** - Show to you the Ranks list of the Server\n**/network store** - Store of the Server\n**/network website** - The Website of the Server\n**/network help** - Show this Menu",
     footer: 
     {
         icon_url: client.user.avatarURL,
         text: "Hatlekan Network"
     }
   }});
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "ranks")) {
    message.author.sendMessage({embed: {
     color: 3447003,
     title: "__Hatlekan Ranks:__\n \n",
     description: "** **\n**OWNER**\n**CO-OWNER**\n**S-MANAGER**\n**D-MANAGER**\n**DEV**\n**H-ADMIN**\n**ADMIN**\n**M-MANAGER**\n**MOD**\n**HELPER**\n**B-MANAGER**\n**BUILDER**\n**YOUTUBER**\n**LEGEND**\n**SUPER**\n**HERO+**\n**HERO**\n**VIP+**\n**VIP**\n**MEMBER**",
     footer: 
     {
         icon_url: client.user.avatarURL,
         text: "Hatlekan Network"
     }
   }});
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "ip")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Hatlekan IP:__\n \n",
      description: "** **\n**Soon**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
  } else
  if (message.content === (prefix + "youtube")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Hatlekan Youtube Channel:__\n \n",
      description: "** **\nsoon",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
  } else
  if (message.content === (prefix + "vote")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Hatlekan Vote Website:__\n \n",
      description: "** **\nSoon",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
 } else
  if (message.content === (prefix + "website")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Hatlekan Website:__\n \n",
      description: "** **\n**SOON**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
 } else
  if (message.content === (prefix + "store")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__MigServer Store:__\n \n",
      description: "** **\n**SOON**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Hatlekan Network"
      }
    }});
 } else
 if (message.content === (prefix + "membercount")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Server Members Count:__\n \n",
      description: "** **",
      fields: [{
             name: "Members",
             value: (message.guild.memberCount)
           }
         ],
         timestamp: new Date(),
         footer: {
           icon_url: client.user.avatarURL,
           text: "Hatlekan Network"
       }
     }});
 } else
 if(message.content.startsWith(prefix + "avatar ")) { //IF for the command.
     if(message.mentions.users.first()) { //Check if the message has a mention in it.
           let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
           let output = user.tag /*Nickname and Discriminator*/ +
           "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
           message.channel.sendMessage(output); //We send the output in the current channel.
    } else {
          message.reply("Invalid user."); //Reply with a mention saying "Invalid user."
    }
 } else
 if (message.content === (prefix + "serverinfo")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "__Server Information:__\n \n",
      description: "** **",
      fields: [{
             name: "Server Name",
             value: (message.guild.name)
           },
           {
            name: "Created On",
            value: (message.guild.createdAt)
           },
           {
            name: "Joined At",
            value: (message.member.joinedAt)
           },
           {
            name: "Members",
            value: (message.guild.memberCount)
           }
         ],
         timestamp: new Date(),
         footer: {
           icon_url: client.user.avatarURL,
           text: "Hatlekan Network"
       }
     }});
  }
});

  client.on('message', message => {
    if (message.content === `/network ping`) {
      message.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`);
    }
  });
 
  client.on('message', message => {
    if (message.content === 'test') {
      message.reply("I am Online, for start type `/network help`");
    }
  });

  client.on('message', msg => {
   if (msg.content === '/network avatar') {
     msg.reply("You need to Mention User")
   }
 });
 
client.login(process.env.BOT_TOKEN);
