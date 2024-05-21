const Sequelize = require('sequelize');
const db = require('../models'); // Importe o arquivo db.js

module.exports = (sequelize) => {
    
    const Movimento = sequelize.define('Movimento', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        depositoid:{
            type: Sequelize.INTEGER,
            references: {
                model: "depositos",
                key: 'id'
            },
            allowNull: false,
        },
        productid:{
            type: Sequelize.INTEGER,
            references: {
                model: "products",
                key: 'id'
            },
            allowNull: false,
        },
        tipomovimento:{
            type: Sequelize.STRING,
            allowNull: false,
        },
        qtd:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        precounitario:{
            type: Sequelize.DOUBLE,
            allowNull: false,
        }
    });
    // Movimento.(db.Deposito);
    


    return Movimento;
}