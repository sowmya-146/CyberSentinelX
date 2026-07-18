function Card({ children }) {
  return (
    <div className="bg-slate-900 p-8 rounded-xl shadow-2xl w-full max-w-md">
      {children}
    </div>
  );
}

export default Card;