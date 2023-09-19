import React from "react";
import logo_tcc from '../images/logo_tcc.svg';
import publico from '../images/publico.svg';
import engrenagem from '../images/engrenagem.svg';
import maos from '../images/maos.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import '../patterns.css';

function PublicApp(){
    return(
        <div className="App">
        <header className="App-header-pages">
        <Link to='/'><img src={logo_tcc} className="App-logo-pages" alt="logo" /></Link>
        <img className="title-pages"src={publico} alt=""/>
        <img className="engrenagem" src={engrenagem} alt="" />
        </header>
        <body>
          <main>

            <img className="main-image" src={maos} alt="" />

            <p className="description-public" >O público alvo tem como base crianças de 5 até 10 anos </p>

            <div className='buttons'>
            
            <Link to='/project'><button>Objetivo</button></Link>
            <Link to='/publicApp'><button>Público-Alvo</button></Link>
            <Link to='/ideas'><button>Ideias</button></Link>
            <Link to='/equipaments'><button>Equipamentos</button></Link>
            <Link to='/project'><button>Projeto</button></Link>
            <Link to='/bibliografia'><button>Bibliografia</button></Link>
  
            </div>
            
          </main>
        </body>
      </div>
    );
}

export default PublicApp;