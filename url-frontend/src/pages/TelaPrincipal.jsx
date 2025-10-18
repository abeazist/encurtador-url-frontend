import React, { useEffect, useState } from "react";
import './TelaPrincipal.css';
import api from "../services/api"; // <-- import da API
import { PencilSimple, Trash, Cards, ChartLine, CalendarBlank } from "@phosphor-icons/react";

const TelaPrincipal = () => {
  const [links, setLinks] = useState([]);
  const [legenda, setLegenda] = useState("");
  const [url, setUrl] = useState("");

  // 🟢 Buscar todos os links ao carregar a página
  useEffect(() => {
    async function fetchLinks() {
      try {
        const response = await api.get("/api/links");
        setLinks(response.data);
      } catch (error) {
        console.error("Erro ao buscar links:", error);
      }
    }
    fetchLinks();
  }, []);

  // 🟣 Criar um novo link encurtado
  async function handleEncurtar() {
    if (!legenda || !url) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await api.post("/api/links", {
        legenda,
        urlOriginal: url,
      });

      // Atualiza a lista após criar
      const { data } = await api.get("/api/links");
      setLinks(data);

      // Limpa os campos
      setLegenda("");
      setUrl("");
    } catch (error) {
      console.error("Erro ao encurtar o link:", error);
      alert("Erro ao encurtar o link!");
    }
  }

  // 🧨 Excluir link
  async function handleExcluir(id) {
    if (!confirm("Tem certeza que deseja excluir este link?")) return;

    try {
      await api.delete(`/api/links/${id}`);
      setLinks((prev) => prev.filter((l) => l.id !== id));
    } catch (error) {
      console.error("Erro ao excluir:", error);
    }
  }

  return (
    <div className="box1">
      <div>
        <h1 className="titulo">Encurtador de Links</h1>
        <h3 className="subtitulo">
          Transforme links longos em URLs curtas e fáceis de compartilhar
        </h3>

        <div className="campos">
          <label>Legenda do Link *</label>
          <input
            type="text"
            value={legenda}
            onChange={(e) => setLegenda(e.target.value)}
            placeholder="Ex: Meu portfólio, Site da Empresa..."
          />
          <br />
          <label>URL para encurtar *</label>
          <div className="div-url-encurtar">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://exemplo.com/sua-url..."
              id="input2"
            />
            <button className="btn-encurtar" onClick={handleEncurtar}>
              Encurtar
            </button>
          </div>
        </div>

        <div className="div-meus-links">
          <h3>Meus Links</h3>
          <p>{links.length} link(s)</p>
        </div>

        {links.map((link) => (
          <div className="meuLink" key={link.id}>
            <div className="titulo-meu-link">
              <h4>{link.legenda}</h4>
              <p id="dado">
                <ChartLine size={20} /> {link.clicks}
              </p>
            </div>

            <p className="link">
              <a href={link.url_original} target="_blank">
                {link.url_original}
              </a>
            </p>

            <p className="data">
              <CalendarBlank size={20} /> Criado em{" "}
              {new Date(link.data_criacao).toLocaleString("pt-BR")}
            </p>
            <hr />

            <div className="div-botoes">
              <button className="btn-copiar" onClick={() => navigator.clipboard.writeText(link.url_original)}>
                <Cards size={20} /> Copiar
              </button>
              <button className="btn-exclui" onClick={() => handleExcluir(link.id)}>
                <Trash size={25} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelaPrincipal;
