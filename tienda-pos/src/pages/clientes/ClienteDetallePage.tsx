import { useParams, useNavigate } from "react-router-dom";
import "../../styles/ClienteDetallePage.css";

type Cliente = {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  activo: boolean;
};

const clientesMock: Cliente[] = [
  { id: 1, nombre: "Juan Pérez", email: "juan@mail.com", telefono: "600123123", activo: true },
  { id: 2, nombre: "María López", email: "maria@mail.com", telefono: "611456456", activo: true },
  { id: 3, nombre: "Carlos Ruiz", email: "carlos@mail.com", telefono: "622789789", activo: false },
];

export const ClienteDetallePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cliente = clientesMock.find(c => c.id === Number(id));

  if (!cliente) {
    return (
      <div className="cliente-detalle-page">
        <div className="cliente-detalle-card">
          <h2>Cliente no encontrado</h2>
          <button className="btn-volver" onClick={() => navigate("/clientes")}>
            Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cliente-detalle-page">
      <div className="cliente-detalle-card">
        <h2>Detalle del Cliente</h2>

        <div className="detalle-item">
          <span className="label">ID:</span>
          <span>{cliente.id}</span>
        </div>

        <div className="detalle-item">
          <span className="label">Nombre:</span>
          <span>{cliente.nombre}</span>
        </div>

        <div className="detalle-item">
          <span className="label">Email:</span>
          <span>{cliente.email}</span>
        </div>

        <div className="detalle-item">
          <span className="label">Teléfono:</span>
          <span>{cliente.telefono}</span>
        </div>

        <div className="detalle-item">
          <span className="label">Estado:</span>
          <span className={cliente.activo ? "estado-activo" : "estado-inactivo"}>
            {cliente.activo ? "Activo" : "Inactivo"}
          </span>
        </div>

        <div className="detalle-buttons">
          <button
            className="btn-editar"
            onClick={() => navigate(`/clientes/${cliente.id}/editar`)}
          >
            Editar
          </button>

          <button
            className="btn-volver"
            onClick={() => navigate("/clientes")}
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};