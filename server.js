import 'dotenv/config';
import express from 'express';
import Groq from 'groq-sdk';

const app = express();
app.use(express.json());

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const SYSTEM_PROMPT = `Você é o assistente virtual de atendimento inicial da Vili Tecnologia, uma empresa especializada em desenvolvimento de software e consultoria para o setor de telecomunicações, com foco em sistemas VoIP, PABX IP, troncos SIP e ramais.

Seu objetivo é:
1. Recepcionar o visitante com cordialidade e apresentar brevemente a Vili Tecnologia.
2. Entender a necessidade do visitante respondendo perguntas sobre VoIP, ramais, PABX, troncos SIP e integração de sistemas de telefonia.
3. Qualificar o lead coletando as seguintes informações ao longo da conversa (de forma natural, sem parecer um formulário):
   - Nome completo
   - Empresa / organização
   - Quantidade de ramais necessários (ou atual)
   - Infraestrutura atual de telefonia (se houver)
   - Melhor forma de contato (e-mail ou telefone)
4. Quando tiver coletado as informações de contato, informar que um especialista da Vili entrará em contato em breve.

Diretrizes:
- Seja objetivo, profissional e amigável.
- Responda sempre em português brasileiro.
- Não invente preços ou prazos específicos — diga que um especialista passará essas informações.
- Se a pergunta estiver fora do escopo de telecomunicações/software, redirecione gentilmente para o foco da Vili.
- Mantenha respostas curtas (máximo 3 parágrafos).`;

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Campo "messages" obrigatório.' });
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      temperature: 0.7,
      max_tokens: 512,
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao consultar a IA.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
