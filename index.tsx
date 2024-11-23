import React from 'react';

import Head from 'next/head';  // Importação do Head para a definição do título da página
import Menu from './componentes/Menu';  // Certifique-se de que o caminho está correto
import styles from '../styles/Home.module.css';  // Verifique se o arquivo de estilos existe

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />  {/* Certifique-se de que o Menu esteja implementado corretamente */}
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial</h1>
      </main>
    </div>
  );
}
