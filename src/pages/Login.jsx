import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleLogin = () => {
    if (username() === "user" && password() === "password") {
      setIsAuthenticated(true);
      navigate("/protected");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="Username" onInput={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onInput={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
