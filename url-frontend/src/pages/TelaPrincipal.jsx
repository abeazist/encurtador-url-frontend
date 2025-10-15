import React from "react";
import './TelaPrincipal.css';
import { PencilSimple, Trash, Cards, ChartLine, CalendarBlank } from "@phosphor-icons/react";

const TelaPrincipal = () => {
    return (
        <div className="box1">
            <div>
                <h1 className="titulo">Encurtador de Links</h1>
                <br />
                <h3 className="subtitulo">Transforme links longos em URLs curtas e fáceis de compartilhar</h3>
                <br />
                <br />

                <div className="campos">
                    <label htmlFor="">Legenda do Link *</label>
                    <input type="text" placeholder="Ex: Meu portfólio, Site da Empresa..." />
                    <br />
                    <label htmlFor="">URL para encurtar *</label>
                    <div className="div-url-encurtar">
                        <input type="text" placeholder="https://exemplo.com/sua-url-muito-longa..." id="input2" />
                        <button className="btn-encurtar">Encurtar</button>

                    </div>

                </div>
                <br />
                <br />

                <div className="div-meus-links">
                    <h3>Meus Links</h3>
                    <p>1 link</p>
                </div>

                <div className="meuLink">
                    <div className="titulo-meu-link">
                        <h4>Exame Seleção Técnico 2026</h4>
                        <p id="dado"><ChartLine size={20}/>124</p>
                    </div>
                    <p className="link">link</p>
                    <div className="div-edicao-link">
                        <input type="text" className="input3" />
                        <button className="btn-salvar">Salvar</button>
                        <button className="btn-cancelar">Cancelar</button>

                    </div>
                    <p className="data"><CalendarBlank size={20} />Criado em 01/10/2025, 09:06</p>
                    <hr />
                    <div className="div-botoes">
                        <button className="btn-copiar"><Cards size={20} />copiar</button>
                        <button disabled className="btn-edit"><PencilSimple size={25} /></button>
                        <button className="btn-exclui"><Trash size={25} /></button>
                    </div>
                </div>
                {/* <div className="meuLink">
                    <div className="titulo-meu-link">
                        <h4>Exame Seleção Técnico 2026</h4>
                        <p classname="dado"><ChartLine size={20} />124</p>
                    </div>
                    <p classname="link">link</p>
                    <p>link original</p>
                    <p classname="data">Criado em 01/10/2025, 09:06</p>
                    <hr />
                    <div className="div-botoes">
                        <button className="btn-copiar"><Cards size={25} />copiar</button>
                        <button className="btn-edit"><PencilSimple size={25} /></button>
                        <button className="btn-exclui"><Trash size={25} /></button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default TelaPrincipal;