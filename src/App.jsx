import { Chat } from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__brand">
          <span className="app__brand-name">Vili Tecnologia</span>
          <span className="app__brand-tag">Atendimento Virtual</span>
        </div>
        <span className="app__status">
          <span className="app__status-dot" />
          Online
        </span>
      </header>

      <main className="app__main">
        <Chat />
      </main>
    </div>
  );
}

export default App;
