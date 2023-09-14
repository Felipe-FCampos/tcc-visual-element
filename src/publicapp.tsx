import React from "react";
import logo_tcc from './images/logo_tcc.svg';
import vselement from './vselement.svg';
import { Link, Routes, Route } from "react-router-dom";


function PublicApp() {
    return(
        <div className="App">
        <header className="App-header">
        
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

export default PublicApp;