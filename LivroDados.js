
import React, { useState } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { useNavigate } from 'react-router-dom';
import "./index.css"

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    // a) Definindo o controlador de livros e editoras
    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    // c) Propriedades de estado
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes.length > 0 ? opcoes[0].value : 0);

    // d) Atributo navigate
    const navigate = useNavigate();

    // e) Método para tratar a seleção da editora
    const tratarCombo = (event) => {
        setCodEditora(Number(event.target.value));
    };

    // f) Método incluir
    const incluir = (event) => {
        event.preventDefault(); // Impede o comportamento padrão do formulário

        const novoLivro = {
            codigo: 0, // Código será gerado no controlador
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split('\n'), // Divide os autores por linha
        };

        controleLivros.incluir(novoLivro); // Chama o método de inclusão
        navigate('/'); // Navega de volta para a lista de livros
    };

    // g) Retorno do componente
    return (
        <main>
            <h1>Cadastro de Livro</h1>
            <form onSubmit={incluir}>
                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo</label>
                    <textarea
                        className="form-control"
                        id="resumo"
                        value={resumo}
                        onChange={(e) => setResumo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
                    <textarea
                        className="form-control"
                        id="autores"
                        value={autores}
                        onChange={(e) => setAutores(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="codEditora" className="form-label">Editora</label>
                    <select
                        className="form-select"
                        id="codEditora"
                        value={codEditora}
                        onChange={tratarCombo}
                        required
                    >
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Cadastrar Livro</button>
            </form>
        </main>
    );
};

 export default LivroDados;


