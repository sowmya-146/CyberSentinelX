import { Eye, EyeOff } from "lucide-react";

function Input({
  type,
  placeholder,
  value,
  onChange,
  icon,
  showPassword,
  setShowPassword,
}) {
  const isPassword = type === "password";

  return (
    <div className="relative">

      {/* Left Icon */}
      <div className="absolute left-3 top-3 text-slate-400">
        {icon}
      </div>

      <input
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-3 pl-10 pr-12 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      {/* Password Eye Icon */}
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-3 text-slate-400 hover:text-cyan-400"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      )}

    </div>
  );
}

export default Input;