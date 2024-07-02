const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const EndPurchase = sequelize.define('EndPurchase', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        purchaseId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'purchases',
                key: 'id',
            },
            unique: true,
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
        qtdReq: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        unitPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        parcelas: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
        fiscalNote: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });

    return EndPurchase;
};