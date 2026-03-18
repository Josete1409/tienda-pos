import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ClientesListPage.css";

type Cliente = {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  activo: boolean;
};

const clientesMock: Cliente[] = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan@mail.com",
    telefono: "600123123",
    activo: true,
  },
  {
    id: 2,
    nombre: "María López",
    email: "maria@mail.com",
    telefono: "611456456",
    activo: true,
  },
  {
    id: 3,
    nombre: "Carlos Ruiz",
    email: "carlos@mail.com",
    telefono: "622789789",
    activo: false,
  },
];

export const ClientesListPage = () => {
  const navigate = useNavigate();

  const [clientes, setClientes] = useState(clientesMock);
  const [busqueda, setBusqueda] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("todos");

  const handleLimpiarFiltros = () => {
    setBusqueda("");
    setEstadoFiltro("todos");
  };

  const handleEliminar = (id: number) => {
    const cliente = clientes.find((c) => c.id === id);
    if (!cliente) return;

    if (confirm(`¿Seguro que deseas eliminar a "${cliente.nombre}"?`)) {
      setClientes(clientes.filter((c) => c.id !== id));
    }
  };

  const clientesFiltrados = clientes.filter((c) => {
    const coincideBusqueda = c.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    const coincideEstado =
      estadoFiltro === "todos" ||
      (estadoFiltro === "activos" && c.activo) ||
      (estadoFiltro === "inactivos" && !c.activo);

    return coincideBusqueda && coincideEstado;
  });

  return (
    <div className="clientes-page">
      <div className="clientes-header">
        <h2>Listado de Clientes</h2>

        <div className="filtros-container">
          <div className="filtro-item">
            <label>Buscar:</label>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className="filtro-item">
            <label>Estado:</label>
            <select
              value={estadoFiltro}
              onChange={(e) => setEstadoFiltro(e.target.value)}
            >
              <option value="todos">Todos</option>
              <option value="activos">Activos</option>
              <option value="inactivos">Inactivos</option>
            </select>
          </div>

          <div className="filtro-item">
            <label>&nbsp;</label>
            <button className="btn-limpiar" onClick={handleLimpiarFiltros}>
              Limpiar
            </button>
          </div>

          <div className="filtro-item">
            <label>&nbsp;</label>
            <button
              className="btn-nuevo"
              onClick={() => navigate("/clientes/nuevo")}
            >
              Nuevo Cliente
            </button>
          </div>
        </div>
      </div>

      <div className="clientes-table-container">
        <table className="clientes-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientesFiltrados.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nombre}</td>
                <td>{c.email}</td>
                <td>{c.telefono}</td>
                <td>{c.activo ? "Activo" : "Inactivo"}</td>
                <td>
                  <button
                    className="btn-accion"
                    onClick={() => navigate(`/clientes/${c.id}/editar`)}
                  >
                    Editar
                  </button>

                  <button
                    className="btn-eliminar"
                    onClick={() => handleEliminar(c.id)}
                  >
                    Eliminar
                  </button>

                  <button
                    className="btn-accion"
                    onClick={() => navigate(`/clientes/${c.id}`)}
                  >
                    Ver detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
