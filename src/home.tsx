import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import vselement from './vselement.svg';
import { Link } from 'react-router-dom';
import './App.css';

function Home(){
    return(
        <div className="App">
        <header className="App-header">
        <img className="title"src={vselement} alt=""/>
        </header>
        <body>
        <img src={logo_tcc} className="App-logo" alt="logo" />
          <main>
            
            <div className='buttons'>
            
            <Link to='/publicApp'><button>Objetivo</button></Link>
            <Link to='/publicApp'><button>Público-Alvo</button></Link>
            <Link to='/publicApp'><button>Ideias</button></Link>
            <Link to='/publicApp'><button>Equipamentos</button></Link>
            <Link to='/publicApp'><button>Projeto</button></Link>
            <Link to='/publicApp'><button>Bibliografia</button></Link>
  
            </div>
            
          </main>
        </body>
      </div>
    );
}

export default Home;