// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './index.css';
import LivroLista from '../src/LivroLista';
import LivroDados from '../src/LivroDados';






const App: React.FC = () => {

    return (
        <Router>


            <nav className= "navbar navbar-dark bg-dark">
  

                <div className="container-fluid">
                 
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                       
                           <Link className="nav-link" to="/">Lista de Livros</Link>
                           <Link className="nav-link" to="/dados">Cadastrar Livro</Link>
                           
                                
                        </ul>
                    </div>
                </div>
            </nav>



            <div className="container mt-4">
            
                <Routes>
                    <Route path="/" element={<LivroLista />} />
                    <Route path="/dados" element={<LivroDados />} />
                </Routes>
            </div>
        </Router>
    );
}; 


export default  App;

