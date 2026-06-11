export function Message({ role, content }) {
  const isUser = role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed rounded-2xl ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-white text-slate-800 rounded-bl-sm shadow-sm'
        }`}
      >
        {content}
      </div>
    </div>
  );
}
