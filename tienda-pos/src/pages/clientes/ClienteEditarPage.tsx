import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../styles/ClienteNuevoPage.css"; // Reutilizamos el mismo estilo

type Cliente = {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  activo: boolean;
};

// Mock temporal (más adelante vendrá de API o contexto)
const clientesMock: Cliente[] = [
  { id: 1, nombre: "Juan Pérez", email: "juan@mail.com", telefono: "600123123", activo: true },
  { id: 2, nombre: "María López", email: "maria@mail.com", telefono: "611456456", activo: true },
  { id: 3, nombre: "Carlos Ruiz", email: "carlos@mail.com", telefono: "622789789", activo: false },
];

export const ClienteEditarPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [cliente, setCliente] = useState<Cliente | null>(null);

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [activo, setActivo] = useState(true);

  useEffect(() => {
    const clienteEncontrado = clientesMock.find(c => c.id === Number(id));
    if (clienteEncontrado) {
      setCliente(clienteEncontrado);
      setNombre(clienteEncontrado.nombre);
      setEmail(clienteEncontrado.email);
      setTelefono(clienteEncontrado.telefono);
      setActivo(clienteEncontrado.activo);
    }
  }, [id]);

  const handleGuardar = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre.trim()) {
      alert("El nombre es obligatorio.");
      return;
    }

    console.log("Cliente actualizado:", {
      id,
      nombre,
      email,
      telefono,
      activo,
    });

    navigate("/clientes");
  };

  if (!cliente) {
    return (
      <div className="cliente-nuevo-page">
        <div className="cliente-form-container">
          <h2>Cliente no encontrado</h2>
          <button className="btn-cancelar" onClick={() => navigate("/clientes")}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cliente-nuevo-page">
      <div className="cliente-form-container">
        <h2>Editar Cliente</h2>

        <form className="cliente-form" onSubmit={handleGuardar}>

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
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
              Guardar Cambios
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