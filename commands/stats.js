const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'stats',
    description: "this is a stats command!",
    async execute(message, args){
        pet = await Pet.findOne( {where: { pet_id: message.author.id }} );

        await message.channel.send(pet.pic);
        await message.channel.send(`\nName: ${pet.nickname}\nEnergy: ${pet.energy}\nHappyness: ${pet.happyness}`, {code: true});
    }
}