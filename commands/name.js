const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'name',
    description: "this is a name command!",
    async execute(message, args){
        const user = await User.findOne({where: { user_id: message.author.id}})
        message.channel.send(`Pet Name: ${args}`, {code: true});
        const pet = await Pet.findOne({where: { pet_id: message.author.id}})
        pet.nickname = args[0];
        pet.save();
        console.log(pet.nickname);
    }
}