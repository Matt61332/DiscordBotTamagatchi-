const { Sequelize, DatabaseError } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'

    
});

const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'adopt',
    description: "this is the adoption command!",
    async execute(message, args){
        const user = await User.findOne({ where: {user_id: message.author.id} });

        if( 5 > user.balance){
            return message.channel.send("you dont have enough $$$", {code: true});
        }

        await user.addpet(message);
    }
}