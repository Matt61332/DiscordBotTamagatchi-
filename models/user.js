module.exports = (sequelize, DataTypes) =>{
    return sequelize.define('User',{
    
        user_id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        balance: {  
            type: DataTypes.INTEGER,
            defaultValue: 10,
            allowNull: false
        },
    });
}