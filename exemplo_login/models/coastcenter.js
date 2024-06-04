// ./models/coastCenter.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const CoastCenter = sequelize.define('CoastCenter', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        balance:{
            type: Sequelize.DOUBLE,
            allowNull: false,
        }
    });
    return CoastCenter;
}

