const { Message } = require("discord.js")
const Sequelize = require('sequelize')
const { User, Pet } = require('../dbobjects.js');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

module.exports = {
    name: 'start',
    description: "this is the start command!",
    async execute(message, userList, args){

        const user = await User.findOne({ where: {user_id: message.author.id}})
        console.log(user);
        if(!user){
        const userName = message.author;
        message.channel.send(`${userName}, welcome to your adventure... ,-help, for more info`);

        const newUser = await User.create( { user_id: message.author.id });

        } else{
            message.channel.send(`You have already started your adventure silly...`, {code: true});
        }
    }
}