// ./models/user.js

const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const XTelefone = sequelize.define('XTelefone', {
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        number:{
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    XTelefone.associate = (models) => {
        XTelefone.belongsTo(sequelize.models.User,{
            foreingKey: 'userId',
            as: 'User'
        });
    };
    return XTelefone;
}