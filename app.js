const express = require('express');
const app = express();
const livroRoutes = require('./routes/livros'); // Importa as rotas dos livros

// Middleware para interpretar JSON no corpo das requisições
app.use(express.json());

// Rotas principais
app.use('/livros', livroRoutes); // Todas as rotas relacionadas a livros começam com "/livros"

// Middleware para tratar rotas inexistentes
app.use((req, res, next) => {
    res.status(404).send('<h1>Not Found</h1><h2>404</h2>');
});

// Configuração da porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});