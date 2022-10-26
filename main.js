const Discord = require('discord.js')
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const userList = new Discord.Collection();

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const { User, Pet } = require('./dbobjects.js');


const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', async ()=> {
    console.log('pokebot is here!!!!');
})



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    console.log(command);
    console.log(args);

    if(User.findOne({ where: { user_id: message.author.id}})){

        if(command === 'ping'){
            client.commands.get('ping').execute(message, args);
        }else if(command === 'pet'){
            client.commands.get('pet').execute(message, args);
        }else if(command === 'adopt'){
            client.commands.get('adopt').execute(message, args);
        }else if(command === 'start'){
            client.commands.get('start').execute(message, userList, args);
        }else if(command === 'bal'){
            client.commands.get('bal').execute(message, args);
        }else if(command === 'stats'){
            client.commands.get('stats').execute(message, args);
        }else if(command === 'name'){
            client.commands.get('name').execute(message, args);
        }else if(command === 'feed'){
            client.commands.get('feed').execute(message, args);
        }else if(command === 'squip'){
            client.commands.get('squip').execute(message, args);
        }else if(command === 'help'){
            client.commands.get('help').execute(message, args);
        }

    }else{

        if(command == 'start'){
            client.commands.get('start').execute(message, userList, args);
        }
    }

});




client.login('ODI1NDU1Mzk3Njk5NTg0MDEw.YF-LPw.ZIt0V-zitUMRyH3hbzrbYW6xmD0');