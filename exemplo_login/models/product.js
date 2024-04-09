// ./models/user.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const Product = sequelize.define('Product', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        price:{
            type: Sequelize.DOUBLE,
            allowNull: false,
        }
    });
    return Product;
}