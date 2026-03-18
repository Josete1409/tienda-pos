import "../../styles/LoginPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const LoginPage = () => {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
 const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de login correcto
    navigate("/productos");

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>TIENDA POS</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};