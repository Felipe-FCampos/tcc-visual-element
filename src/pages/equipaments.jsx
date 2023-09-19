import React from "react";
import logo_tcc from '../images/logo_tcc.svg';
import equipamentos from '../images/equipamentos.svg';
import engrenagem from '../images/engrenagem.svg';
import robot from '../images/robot.svg';
import  Texto  from "./text";
import { Link } from 'react-router-dom';
import '../App.css';
import '../equip.css';

function Equip(){
    return(
        <div className="App">
        <header className="App-header-pages">
        <Link to='/'><img src={logo_tcc} className="App-logo-pages" alt="logo" /></Link>
        <img className="title-pages"src={equipamentos} alt=""/>
        <img className="engrenagem" src={engrenagem} alt="" />
        </header>
        <body>
          <main>
        <div className="main-content">
        <div className="main-img-div">
            <img className="main-image" src={robot} alt="" />
        </div>
        <div className="items">
            <Texto />
        </div>
        </div>
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

export default Equip;