import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { User, Lock } from "lucide-react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {
  // State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Login Function
  const handleLogin = () => {
    if (!username.trim()) {
      setError("Username is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    // Clear previous error
    setError("");

    console.log("Username:", username);
    console.log("Password:", password);

    alert("Login Successful! (Backend not connected yet)");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <Card>
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            Cyber Sentinel X
          </h1>

          <p className="text-slate-400 mt-2">
            AI-Driven Security Operations, Risk & Compliance Platform
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm mb-5">
            {error}
          </div>
        )}

        {/* Login Form */}
        <div className="space-y-5">
          <Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={<User size={20}/>}
          />

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={<Lock size={20}/>}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />

          <Button onClick={handleLogin}>
            Sign In
          </Button>
        </div>

        {/* Footer */}
        <p className="text-center text-slate-500 text-sm mt-8">
          Secure Login Portal
        </p>
      </Card>
    </div>
  );
}

export default Login;