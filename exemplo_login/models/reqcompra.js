const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const ReqCompra = sequelize.define('ReqCompra', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'users', // Verifique se o nome da tabela é 'users'
                key: 'id',
            },
            allowNull: false,
        },
        productid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'products', // Verifique se o nome da tabela é 'products'
                key: 'id',
            },
            allowNull: false,
        },
        qtdReq: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        coastcenterid: {
            type: Sequelize.INTEGER,
            references: {
                model: 'coastcenters', // Verifique se o nome da tabela é 'coastcenters'
                key: 'id',
            },
        },
    });

    return ReqCompra;
};