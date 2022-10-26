module.exports = {
    name: 'help',
    description: "this is a help command!",
    async execute(message, args){
        message.channel.send(`Getting started: adopt, name xxx, stats\nCaring for your pet: feed, pet, squip`);
    }
}