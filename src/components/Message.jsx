import ReactMarkdown from 'react-markdown';

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
        <ReactMarkdown
          components={{
            p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
            ul: ({ children }) => <ul className="list-disc list-inside mt-1 mb-1 space-y-0.5">{children}</ul>,
            ol: ({ children }) => <ol className="list-decimal list-inside mt-1 mb-1 space-y-0.5">{children}</ol>,
            li: ({ children }) => <li className="ml-1">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
