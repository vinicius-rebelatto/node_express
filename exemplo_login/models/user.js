// ./models/user.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return User;
}



module.exports = User;