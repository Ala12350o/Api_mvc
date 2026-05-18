const express = require('express'); //importa o express
const app = express(); //cria uma instância do express
const sequelize = require('../config/database'); //importa o sequelize
const userRoutes = require('../routes/userRoutes'); //importa as rotas dos usuários

//middleware
app.use(express.json()); //habilita o json

app.use('/api', userRoutes); //habilita as rotas dos usuários

sequelize
.authenticate()
.then(() => {
    console.log('Banco de dados conectado');
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000');
    });
})
.catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
});
