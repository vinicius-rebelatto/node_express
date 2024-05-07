// ./models/stock.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const Stock = sequelize.define('Stock', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        productId:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        quantidade:{
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    });
    return Stock;
}
