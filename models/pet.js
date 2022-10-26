module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('Pet',{
    
        pet_id: {
            type: DataTypes.STRING,
            unique: true,
        },
        nickname: {
            type: DataTypes.STRING,
            defaultValue:" ",
            allowNull: false,
        },
        happyness:{
            type: DataTypes.INTEGER,
            defaultValue: 5,
            allowNull: false,
        },
        energy:{
            type: DataTypes.INTEGER,
            defaultValue: 5,
            allowNull:false,
        },
        exp:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        level:{
            type: DataTypes.INTEGER,
            defaultValue:1,
            allowNull: false,
        },
        pic:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
}