# Projeto

Esta é uma aplicação web desenvolvida com o objetivo de encurtar URLs longas e facilitar o compartilhamento. O sistema permite cadastrar uma URL original, gerar um link curto e acompanhar os acessos.

---

## Links da Aplicação

| Front-end | https://encurtador-url-frontend-dun.vercel.app/ |
| Back-end | https://encurtador-url-backend-l9dr.onrender.com |

---

## Tecnologias Utilizadas

- **Front-end:** React + Axios
- **Back-end:** Node.js + Fastify + Drizzle ORM
- **Banco de Dados:** PostgreSQL
- **Hospedagem:** Vercel (Front), Render (Back)

---

## Funcionalidade Extra

> Foi implementada a funcionalidade de visualização de QR Code para cada link encurtado.

# Motivação:

Tornar o compartilhamento de links mais ágil e prático, especialmente em situações em que utilizar a URL gerada não é conveniente.

Agregar valor à aplicação, oferecendo uma experiência adicional além da simples geração de links encurtados.

Demonstrar a integração de bibliotecas externas (como qrcode.react) com o front-end React, aumentando a robustez e interatividade do sistema.

# Como funciona:

Cada link listado possui um botão “Ver QR Code”.

Ao clicar, o QR Code correspondente ao link gerado e é exibido na tela.


---

## Como Rodar Localmente

# Front-end

cd url-frontend
cd src
npm run dev

# Back-end

npm install
npm run dev

---

## Grupo

# Beatriz Oliveira Santos
# Denise Cardoso
# Fernanda Rocha Benetti
