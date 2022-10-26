const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'pet',
    description: "this is a pet command!",
    async execute(message, args){

        const pet =  await Pet.findOne({ where: { pet_id: message.author.id}});

        if(args == 100){
            pet.happyness = args;
            pet.save();
            return;
        }

        if(pet.happyness < 10){
            pet.happyness += 1;
            pet.save();
            message.channel.send('*sprrrrr*', {code: true});
            return message.channel.send('Happyness +1', {code: true});
        }

        return message.channel.send(`${pet.nickname} cannot get more happy`, {code: true});

    }
}