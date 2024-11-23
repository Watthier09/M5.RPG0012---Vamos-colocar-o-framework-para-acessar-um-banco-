const Livro = require('./livro-schema'); // Importa o modelo Livro

// Função obterLivros: retorna todos os livros
const obterLivros = async () => {
  return await Livro.find(); // Retorna todos os livros da coleção 'livros'
};

// Função incluir: inclui um novo livro na coleção
const incluir = async (livro) => {
  return await Livro.create(livro); // Cria e salva o novo livro na coleção 'livros'
};

// Função excluir: exclui um livro com base no ID (codigo)
const excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo }); // Exclui o livro com o ID igual a 'codigo'
};

// Exporta as funções para uso em outras partes do projeto

module.exports = {
    obterLivros, // Exporta a função obterLivros
    incluir,     // Exporta a função incluir
    excluir,     // Exporta a função excluir
  };