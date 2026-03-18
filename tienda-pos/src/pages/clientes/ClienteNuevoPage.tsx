import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ClienteNuevoPage.css";

export const ClienteNuevoPage = () => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [activo, setActivo] = useState(true);

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    // Aquí más adelante enviarás los datos al backend
    console.log("Cliente guardado:", { nombre, email, telefono, activo });

    navigate("/clientes");
  };

  return (
    <div className="cliente-nuevo-page">
      <div className="cliente-form-container">
        <h2>Nuevo Cliente</h2>

        <form className="cliente-form" onSubmit={handleGuardar}>

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre del cliente"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="600123123"
            />
          </div>

          <div className="form-group-check">
            <label>
              <input
                type="checkbox"
                checked={activo}
                onChange={(e) => setActivo(e.target.checked)}
              />
              Activo
            </label>
          </div>

          <div className="form-buttons">
            <button type="submit" className="btn-guardar">
              Guardar
            </button>

            <button
              type="button"
              className="btn-cancelar"
              onClick={() => navigate("/clientes")}
            >
              Cancelar
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};