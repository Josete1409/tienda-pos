import "../../styles/FacturasListPage.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type Factura = {
  id: number;
  cliente: string;
  fecha: string;
  total: number;
  estado: "Pagada" | "Pendiente";
};

const facturasMock: Factura[] = [
  {
    id: 1,
    cliente: "Juan Pérez",
    fecha: "2024-01-10",
    total: 59.9,
    estado: "Pagada",
  },
  {
    id: 2,
    cliente: "María López",
    fecha: "2024-01-12",
    total: 120.5,
    estado: "Pendiente",
  },
  {
    id: 3,
    cliente: "Carlos Ruiz",
    fecha: "2024-01-15",
    total: 35.0,
    estado: "Pagada",
  },
];

export const FacturasListPage = () => {
  const navigate = useNavigate();
  const [busqueda, setBusqueda] = useState("");
  const [estadoFiltro, setEstadoFiltro] = useState("todos");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");

  const handleLimpiarFiltros = () => {
    setBusqueda("");
    setEstadoFiltro("todos");
    setFechaDesde("");
    setFechaHasta("");
  };

  const facturasFiltradas = facturasMock.filter((f) => {
    const coincideBusqueda = f.cliente
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideEstado =
      estadoFiltro === "todos" || f.estado === estadoFiltro;

    const coincideFechaDesde =
      !fechaDesde || new Date(f.fecha) >= new Date(fechaDesde);

    const coincideFechaHasta =
      !fechaHasta || new Date(f.fecha) <= new Date(fechaHasta);

    return (
      coincideBusqueda &&
      coincideEstado &&
      coincideFechaDesde &&
      coincideFechaHasta
    );
  });
  return (
    <div className="facturas-page">
      <div className="facturas-header">
        <h2>Listado de Facturas</h2>
        <div className="filtros-container">
          <div className="filtro-item">
            <button className="btn-limpiar" onClick={handleLimpiarFiltros}>
              Limpiar
            </button>
          </div>

          <div className="filtro-item">
            <label>Buscar:</label>
            <input
              type="text"
              placeholder="Buscar por cliente..."
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
              <option value="Pagada">Pagadas</option>
              <option value="Pendiente">Pendientes</option>
            </select>
          </div>

          <div className="filtro-item">
            <label>Inicio:</label>
            <input
              type="date"
              value={fechaDesde}
              onChange={(e) => setFechaDesde(e.target.value)}
            />
          </div>

          <div className="filtro-item">
            <label>Fin:</label>
            <input
              type="date"
              value={fechaHasta}
              onChange={(e) => setFechaHasta(e.target.value)}
            />
          </div>
        </div>
      </div>

      <table className="facturas-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Fecha</th>
            <th>Total (€)</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {facturasFiltradas.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.cliente}</td>
              <td>{f.fecha}</td>
              <td>{f.total.toFixed(2)}</td>
              <td>{f.estado}</td>
              <td>
                <button
                  className="btn-accion"
                  onClick={() => navigate(`/facturas/${f.id}`)}
                >
                  Ver detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
