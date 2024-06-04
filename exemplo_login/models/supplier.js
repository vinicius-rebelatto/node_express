// ./models/Supplier.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const Supplier = sequelize.define('Supplier', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        telephone:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return Supplier;
}

