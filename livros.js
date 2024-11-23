const express = require('express');
const router = express.Router();
const livroDao = require('../modelo/livro-dao'); // Importa as funções do DAO

// Rota para obter todos os livros
router.get('/', async (req, res) => {
    try {
        const livros = await livroDao.obterLivros();
        res.status(200).json(livros);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os livros' });
    }
});

// Rota para adicionar um novo livro
router.post('/', async (req, res) => {
    try {
        const novoLivro = req.body;
        const livroAdicionado = await livroDao.incluir(novoLivro);
        res.status(201).json(livroAdicionado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar o livro' });
    }
});

// Rota para excluir um livro por ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const resultado = await livroDao.excluir(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir o livro' });
    }
});

module.exports = router;
