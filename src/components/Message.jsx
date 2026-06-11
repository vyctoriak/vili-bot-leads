export function Message({ role, content }) {
  return (
    <div className={`message message--${role}`}>
      <p className="message__text">{content}</p>
    </div>
  );
}
