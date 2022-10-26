const { User, Pet } = require('../dbobjects.js');

module.exports = {
    name: 'squip',
    description: "this is a squip command!",
    async execute(message, args){

        const pet = await Pet.findOne({where: { pet_id: message.author.id}})

        if(pet.energy >= 1){

        if(pet.energy == 101){
            pet.pic = args[0];
            await pet.save();
            await message.channel.send(`${pet.pic}`);
            return;
        }

            pet.energy -= 1;
            pet.save();

            message.channel.send('*Squip*', {code: true});

            const min = await Math.ceil(10);
            const max = await Math.floor(1);
            const num = await Math.floor(Math.random() * (max - min) + min)
            
            if(num == 1 && pet.happyness >= 1){
                await message.channel.send("https://p.jing.fm/clipimg/small/86-865356_axolotl-sticker-cartoon.png");
                pet.pic = "https://p.jing.fm/clipimg/small/86-865356_axolotl-sticker-cartoon.png";
                pet.happyness -= 1;
                pet.save();
            }else if(num == 3 && pet.happyness >= 2){
                await message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBv83Pi2-60Cp-BSEAbMnVJt5TwEKzjEd8A&usqp=CAU");
                pet.pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBv83Pi2-60Cp-BSEAbMnVJt5TwEKzjEd8A&usqp=CAU";
                pet.happyness -= 2;
                pet.save();
            }else if(num == 4 && pet.happyness >= 3){
                await message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6X8-MP-PiPYqtXjbSXDuc7mVucon-oxQwA&usqp=CAU");
                pet.pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy6X8-MP-PiPYqtXjbSXDuc7mVucon-oxQwA&usqp=CAU";
                pet.happyness -= 3;
                pet.save();
            }else if(num == 5 && pet.happyness >= 5){
                await message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf20X3af0VdwcZZrbNP2KU5PHpRMJUoIewsQ&usqp=CAU");
                pet.pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf20X3af0VdwcZZrbNP2KU5PHpRMJUoIewsQ&usqp=CAU";
                pet.happyness -= 5;
                pet.save();
            }else if(num == 6 && pet.happyness >= 10){
                await message.channel.send("https://i.pinimg.com/originals/6c/bc/6a/6cbc6aebdaeceb4bb2b9e9f14cdd68f8.jpg");
                pet.pic = "https://i.pinimg.com/originals/6c/bc/6a/6cbc6aebdaeceb4bb2b9e9f14cdd68f8.jpg";
                pet.happyness -= 10;
                pet.save();
            }else if(num == 7 && pet.happyness >= 3){
                await message.channel.send("https://i.pinimg.com/originals/cb/8a/ab/cb8aabd32e26702a1dd270449b41aa6d.jpg");
                pet.pic = "https://i.pinimg.com/originals/cb/8a/ab/cb8aabd32e26702a1dd270449b41aa6d.jpg";
                pet.happyness -= 3;
                pet.save();
            }else if(num == 8 && pet.happyness >= 10){
                await message.channel.send("https://i.kym-cdn.com/photos/images/newsfeed/001/928/265/3f1");
                pet.pic = "https://i.kym-cdn.com/photos/images/newsfeed/001/928/265/3f1";
                pet.happyness -= 10;
                pet.save();
            }else if(num == 9 && pet.happyness >= 10){
                await message.channel.send("https://i.redd.it/gf66r9q742n41.jpg");
                pet.pic = "https://i.redd.it/gf66r9q742n41.jpg";
                pet.happyness -= 10;
                pet.save();
            }else if(num == 2 && pet.happyness >= 2){
                await message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkifvLjS4cvEeII_YEk7qb9GGjB_4oA8Q9g&usqp=CAU");
                pet.pic = 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkifvLjS4cvEeII_YEk7qb9GGjB_4oA8Q9g&usqp=CAU";
                pet.happyness -= 2;
                pet.save();
            }else if(num == 10 && pet.happyness >= 3){
                await message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXGrOMg2dZN-B17pXZZrYyL7nHMZ9Gkt3XA&usqp=CAU");
                pet.pic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXGrOMg2dZN-B17pXZZrYyL7nHMZ9Gkt3XA&usqp=CAU";
                pet.happyness -= 3;
                pet.save();
            }else{
                message.channel.send('wont do that one without extra pets');
            }

        }else{
            message.channel.send('*yawwwwwwn* this one was too hard right now... maybe after some Snackies??????');
        }

    }
}