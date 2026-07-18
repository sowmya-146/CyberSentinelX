function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  );
}

export default Input;