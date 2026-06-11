# Vili Bot Leads — Atendimento Virtual

Bot web de atendimento inicial e captação de leads para a **Vili Tecnologia**, empresa especializada em VoIP, PABX IP, troncos SIP e desenvolvimento web.

> Projeto de extensão universitária — Engenharia de Software 3, FATEC Carapicuíba (2026)  
> Coletivo externo: [Vili Tecnologia](https://vilitecnologia.com.br)

---

## Funcionalidades

- Chat web em tempo real com IA (Groq — LLaMA 3.3 70B)
- Responde dúvidas sobre serviços, planos e preços da Vili
- Qualifica leads: coleta nome, empresa, quantidade de ramais e contato
- Indicador de digitação animado
- Interface responsiva (desktop e mobile)
- Renderização de Markdown nas respostas

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Frontend | React 19 + Vite + Tailwind CSS v4 |
| Backend | Node.js + Express |
| IA | Groq API (`llama-3.3-70b-versatile`) |
| Deploy | Render (Static Site + Web Service) |

---

## Como rodar localmente

```bash
# 1. Clonar o repositório
git clone https://github.com/vyctoriak/vili-bot-leads.git
cd vili-bot-leads

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Preencha GROQ_API_KEY com sua chave em https://console.groq.com

# 4. Subir frontend e backend juntos
npm start
```

Acesse: [http://localhost:5173](http://localhost:5173)

> Para rodar separadamente: `npm run server` (porta 3001) e `npm run dev` (porta 5173).

---

## Variáveis de ambiente

| Variável | Descrição |
|----------|-----------|
| `GROQ_API_KEY` | Chave da API Groq (obrigatória no backend) |
| `PORT` | Porta do servidor Express (padrão: 3001) |
| `FRONTEND_URL` | URL do frontend em produção (para CORS) |
| `VITE_API_URL` | URL do backend em produção (usado no build do frontend) |

---

## Estrutura do projeto

```
├── server.js              # Backend Express + integração Groq
├── src/
│   ├── App.jsx            # Layout principal
│   └── components/
│       ├── Chat.jsx       # Lógica do chat (estado, fetch, scroll)
│       └── Message.jsx    # Bolha de mensagem com Markdown
├── public/
│   └── favicon.svg
├── index.html
└── PRD.md                 # Product Requirements Document
```
