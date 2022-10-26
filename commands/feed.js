const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'feed',
    description: "this is a feed command!",
    async execute(message, args){

        const pet = await Pet.findOne({ where: { pet_id: message.author.id}});
        
        if(args == 100){
            pet.energy = args;
            pet.save();
            return;
        }

        if(args == 101){
            pet.energy = args;
            pet.save();
            return;
        }

        if(pet.energy < 10){
            pet.energy += 1;
            pet.save();
            message.channel.send('Nom Nom Nom....', {code: true});
            return message.channel.send('Energy +1', {code: true});
        }

        return message.channel.send(`${pet.nickname} is too full`, {code: true});

    }
}