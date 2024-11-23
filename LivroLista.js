// src/LivroLista.js
import React, { useState, useEffect } from 'react';
import { ControleLivro } from '../controle/ControleLivros';
import { ControleEditora } from '../controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();
const LinhaLivro = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>
                <strong>{livro.titulo}</strong>
                <button className="btn btn-danger btn-sm ms-2" onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};
const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
            const livrosObtidos = controleLivro.obterLivros();
            setLivros(livrosObtidos);
            setCarregado(true);
        }
    }, [carregado]);

    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main className="container mt-5">
            <h1 className="mb-4">Lista de Livros</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Editora</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
