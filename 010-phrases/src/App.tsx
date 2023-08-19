import { useState } from 'react';
import './App.css';
import logoImg from './assets/logo.png';

function App() {
  const [textoFrase, setTextoFrase] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  const allFrases = [
    {
      id: 1,
      nome: 'Motivação',
      frases: [
        'Comece onde você está, use o que você tem e faça o que você pode.',
        'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
        'Devíamos ser ensinados a não esperar por inspiração para começar algo. Ação sempre gera inspiração. Inspiração raramente gera ação.',
        'Não importa que você vá devagar, contanto que você não pare.',
        'A inspiração existe, porém temos que encontrá-la trabalhando.',
        'Coragem é saber o que não temer.',
        'Conhecer a si mesmo é o começo de toda sabedoria.',
        'Descubra quem é você, e seja essa pessoa. A sua alma foi colocada nesse mundo para ser isso, então viva essa verdade e todo resto virá.',
        'Acredite em milagres, mas não dependa deles.',
        'Não é a carga que o derruba, mas a maneira como você a carrega.',
        'Não existe nada de completamente errado no mundo, mesmo um relógio parado, consegue estar certo duas vezes por dia.',
        'A vida é 10% o que acontece a você e 90% como você reage a isso.',
      ],
    },
    {
      id: 2,
      nome: 'Bom dia',
      frases: [
        'Bom dia! Cada manhã marca o início de uma nova página no livro da sua vida. Então, escreva hoje o melhor capítulo de todos!',
        'O ontem já passou, o amanhã é um mistério. Mas o hoje é uma bênção! Bom dia!',
        'Bom dia! “A vida por si só é o mais maravilhoso dos contos de fada.” ',
        'Bom dia! “Hoje, assim que acordo, eu sorrio. 24 horas novinhas em folha estão diante de mim. Prometo viver ao máximo cada momento.”',
        'A sua caminhada será muito mais leve se você não levar com você o peso do passado. Bom dia!',
        'Oportunidades são iguais ao nascer do sol: se você esperar demais, vai acabar perdendo. Bom dia!',
        'Bom dia! Você nunca viveu esse dia antes, nem vai vivê-lo novamente. Então, aproveite cada minuto!',
      ],
    },
  ];

  function gerarFrase() {
    const listaFrasesCategoriaSelecionada =
      allFrases[categoriaSelecionada].frases;

    const tamanhoLista = listaFrasesCategoriaSelecionada.length;

    const randomNumber = Math.floor(Math.random() * tamanhoLista);

    setTextoFrase(listaFrasesCategoriaSelecionada[randomNumber]);
  }

  return (
    <div className="container">
      <img alt="logo" className="logo" src={logoImg} />

      <h2 className="title">Categorias</h2>

      <section className="category-area">
        {allFrases.map((item, index) => (
          <button
            key={item.id}
            className="category-button"
            style={{
              borderWidth:
                item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
              borderColor: '#1fa4db',
            }}
            onClick={() => setCategoriaSelecionada(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={gerarFrase}>
        Gerar Frase
      </button>

      {textoFrase != '' && <p className="texto-frase">{textoFrase}</p>}
    </div>
  );
}

export default App;
