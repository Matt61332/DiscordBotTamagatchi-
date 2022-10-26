const { Message } = require('discord.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

const Pet = require('./models/pet.js')(sequelize, Sequelize.DataTypes);
const User = require('./models/user.js')(sequelize, Sequelize.DataTypes);

User.prototype.addpet = async function(message) {
    const userPet = await Pet.findOne({
        where: { pet_id: message.author.id }
    });

    if(userPet){
        return message.channel.send("You already have a lovely pet", {code: true});
    }

    const user = await User.findOne({ where: { user_id: message.author.id}})

    const cost = 5;

    user.balance -= cost;
    user.save();

    await Pet.create({ pet_id: message.author.id, nickname: "Squipper", pic: "https://p.jing.fm/clipimg/small/86-865356_axolotl-sticker-cartoon.png"});

    const pet = await Pet.findOne( {where: { pet_id: message.author.id }} )

    await message.channel.send(pet.pic);
    await message.channel.send("You have adopted Squipper!!\nMake sure to give him lots of love.", {code: true});
}

User.prototype.getPet = function(){
    return UserPets.findAll({
        where: { user_id: this.user_id },
        include: ['pet'],
    });
};

module.exports = { Pet, User }