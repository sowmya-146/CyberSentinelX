import { useState } from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";

function Login() {

  // 👇 State
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 👇 Login Function
  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <Card>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">
            Cyber Sentinel X
          </h1>

          <p className="text-slate-400 mt-2">
            AI-Driven Security Operations, Risk & Compliance Platform
          </p>
        </div>

        <div className="space-y-5">
          <Input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin}>
            Sign In
          </Button>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Secure Login Portal
        </p>
      </Card>
    </div>
  );
}

export default Login;