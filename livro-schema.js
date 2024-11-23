const banco = require('./conexao'); // Importa a conexão com o MongoDB

// Definindo a estrutura do banco na variável LivroSchema
const LivroSchema = new banco.Schema({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  anoPublicacao: { type: Number, required: true },
  genero: { type: String, required: true },
});

// Associando LivroSchema à coleção 'livros' e criando o modelo 'Livro'
const Livro = banco.model('Livro', LivroSchema, 'livros');

// Exporta o modelo Livro no padrão de módulo do JavaScript
module.exports = Livro;
