import React from 'react';
import logo_tcc from './logo_tcc.svg';
import vselement from './vselement.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img className="title"src={vselement} alt=""/>
      </header>
      <body>
        
        <main>
          <img src={logo_tcc} className="App-logo" alt="logo" />
          <div className='buttons'>
          <a href="https://reactjs.org"><button>Objetivo</button></a>
          <a href="https://reactjs.org"><button>Público-Alvo</button></a>
          <a href="https://reactjs.org"><button>Ideias</button></a>
          <a href="https://reactjs.org"><button>Equipamentos</button></a>
          <a href="https://reactjs.org"><button>Projeto</button></a>
          <a href="https://reactjs.org"><button>Bibliografia</button></a>
          </div>
        </main>
      </body>
    </div>
  );
}

export default App;
