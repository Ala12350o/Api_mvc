const sequelize = require('../config/database'); // chama o sequelize
const User = require("./user");

sequelize.sync(); // sincroniza o banco de dados

module.exports = { // exporta o sequelize
    sequelize,
    User
};