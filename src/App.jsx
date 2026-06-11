import { Chat } from './components/Chat';
import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-100">
      <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md shrink-0">
        <div className="flex flex-col">
          <span className="font-bold text-lg tracking-wide">Vili Tecnologia</span>
          <span className="text-slate-400 text-xs">Atendimento Virtual</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Online
        </div>
      </header>

      <main className="flex-1 overflow-hidden flex justify-center">
        <div className="w-full max-w-2xl flex flex-col">
          <Chat />
        </div>
      </main>
    </div>
  );
}

export default App;
