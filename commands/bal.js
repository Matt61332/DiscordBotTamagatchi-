const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'bal',
    description: "this is a bal command!",
    async execute(message, args){
        const user = await User.findOne({where: { user_id: message.author.id}})
        console.log(user.balance);
        message.channel.send(`Balance: ${user.balance}`, {code: true});
        console.log(user.balance);
        console.log(args);
    }
}