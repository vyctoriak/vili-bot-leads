import { useState, useRef, useEffect } from 'react';
import { Message } from './Message';

const WELCOME = {
  role: 'assistant',
  content:
    'Olá! Sou o assistente virtual da Vili Tecnologia. Posso te ajudar com informações sobre nossos serviços de VoIP, ramais e PABX IP. Como posso te ajudar hoje?',
};

export function Chat() {
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;

    const userMessage = { role: 'user', content: text };
    const history = [...messages, userMessage];
    setMessages(history);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) throw new Error('Erro na resposta do servidor');

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Desculpe, tive um problema ao me conectar. Por favor, tente novamente.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) handleSubmit(e);
  }

  return (
    <div className="chat">
      <div className="chat__messages">
        {messages.map((msg, i) => (
          <Message key={i} role={msg.role} content={msg.content} />
        ))}

        {isLoading && (
          <div className="message message--assistant">
            <span className="chat__typing">
              <span />
              <span />
              <span />
            </span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      <form className="chat__form" onSubmit={handleSubmit}>
        <input
          className="chat__input"
          type="text"
          placeholder="Digite sua mensagem..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          autoFocus
        />
        <button
          className="chat__button"
          type="submit"
          disabled={isLoading || !input.trim()}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
