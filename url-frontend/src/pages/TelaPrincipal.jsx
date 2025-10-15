import React from "react";
import './TelaPrincipal.css';

const TelaPrincipal = () => {
    return (
        <div className="box1">
            <div>
                <h1 className="titulo">Encurtador de Links</h1>
                <h3>Transforme links longos em URLs curtas e fáceis de compartilhar</h3>

                <div className="campos">
                    <label htmlFor="">Legenda do Link *</label>
                    <input type="text" placeholder="Ex: Meu portfólio, Site da Empresa..."/>
                    <label htmlFor="">URL para encurtar *</label>
                    <input type="text" placeholder="https://exemplo.com/sua-url-muito-longa..." id="input2"/>
                    <button className="btn-encurtar">Encurtar</button>

                </div>



                <h3>Meus Links</h3>
                <div className="meuLink">
                    <h4>Exame Seleção Técnico 2026</h4>
                </div>
            </div>
        </div>
    )
}

export default TelaPrincipal;