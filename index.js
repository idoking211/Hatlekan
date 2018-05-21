const client = new Discord.Client();
 const prefix = ("/netowrk");      
        client.on('ready', () => {
          client.user.setStatus("Online");
          client.user.setGame("/network help | HatleKan Network");
          console.log(Logged in as ${client.user.tag}!);
          console.log(The network connected! Success!!!)
        });
        
        client.on('message', msg => {
          if (msg.content === '!ping') {
            msg.channel.sendMessage('Pong!');
          }
        });
        
        client.on('message', msg => {
          if (msg.content === '/network help') {
            msg.channel.sendMessage("MigServer Network")                                                                                                                                                                                                                                                                                                                                             /network ip - Show ip                                                                                                                                                                                                                                                                                                                                                /network info - To show bot Info!
client.login(process.env.BOT_TOKEN);
