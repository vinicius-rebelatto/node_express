const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Purchase = sequelize.define('Purchase', {
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
        supplierid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'suppliers', 
                key: 'id',
            },
            allowNull: true,
        },
        qtdReq: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        unitPrice: {
            type: Sequelize.DOUBLE,
            allowNull: true,
        },
        status: {
            type: Sequelize.ENUM,
            values: ['pendente', 'encerrado', 'cancelado'],
            allowNull: false,
          },
    });

    return Purchase;
};