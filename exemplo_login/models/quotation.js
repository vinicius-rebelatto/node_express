const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Quotation = sequelize.define('Quotation', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        reqid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'reqcompras', // Verifique se o nome da tabela é 'users'
                key: 'id',
            },
            allowNull: false,
        },
        productid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'products', 
                key: 'id',
            },
            allowNull: false,
        },
        supplierid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'suppliers', 
                key: 'id',
            },
            allowNull: false,
        },
        unitPrice: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        validUntil: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    });

    return Quotation;
};