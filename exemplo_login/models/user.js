// ./models/user.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        senha:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return User;
}