const Sequelize = require('sequelize');
const User = require('./user');

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



// // ./models/ReqCompra.js

// const Sequelize = require('sequelize');
// const db = require('../models');

// module.exports = (sequelize) => {
    
//     const ReqCompra = sequelize.define('ReqCompra', {
//         id:{
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true,
//         },
//         userid:{
//             type: Sequelize.INTEGER,
//             references: {
//                 model: "users",
//                 key: 'id'
//             },
//             allowNull: false,
//         },
//         productid:{
//             type: Sequelize.INTEGER,
//             references: {
//                 model: "products",
//                 key: 'id'
//             },
//             allowNull: false,
//         },
//         qtdReq:{
//             type: Sequelize.INTEGER,
//             allowNull: false,
//         },
//         coastcenterid:{
//             type: Sequelize.INTEGER,
//             references: {
//                 model: "coastcenters",
//                 key: 'id',
//             }
//         }
//     });


//     ReqCompra.belongsTo(db.User, { foreignKey: 'id' });
//     ReqCompra.belongsTo(db.Product, { foreignKey: 'id' });
//     ReqCompra.belongsTo(db.CoastCenter, { foreignKey: 'id' });


//     return ReqCompra;
// }