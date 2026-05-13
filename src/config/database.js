const { Sequelize } = require('sequelize'); // chama o sequelize

require('dotenv').config(); // chama o dotenv

const sequelize = new Sequelize( // cria a conexão com o banco de dados
    process.env.DB_NAME, // nome do banco de dados
    process.env.DB_USER, // usuário do banco de dados
    process.env.DB_PASSWORD, // senha do banco de dados
    {
        host: process.env.DB_HOST, // host do banco de dados
        port: process.env.DB_PORT, // porta do banco de dados
        dialect:process.env.DB_DIALECT || 'mysql', // tipo de banco de dados
        logging: false // desativa o login do sequelize
    }
); // fecha a conexão

module.exports = sequelize; // exporta a conexão



