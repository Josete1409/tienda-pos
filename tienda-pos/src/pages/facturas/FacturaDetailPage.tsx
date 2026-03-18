import "../../styles/FacturaDetailPage.css";
import { useParams, useNavigate } from "react-router-dom";

const facturasMock = [
  {
    id: 1,
    cliente: "Juan Pérez",
    fecha: "2024-01-10",
    total: 59.90,
    estado: "Pagada",
    productos: [
      { nombre: "Camiseta básica", cantidad: 2, precio: 9.99 },
      { nombre: "Pantalón vaquero", cantidad: 1, precio: 29.90 },
    ],
  },
  {
    id: 2,
    cliente: "María López",
    fecha: "2024-01-12",
    total: 120.50,
    estado: "Pendiente",
    productos: [
      { nombre: "Sudadera", cantidad: 1, precio: 39.50 },
      { nombre: "Camiseta básica", cantidad: 3, precio: 9.99 },
    ],
  },
];

export const FacturaDetallePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const factura = facturasMock.find((f) => f.id === Number(id));

  if (!factura) {
    return <p>Factura no encontrada</p>;
  }

  return (
    <div className="factura-detalle-page">
      <h2>Factura #{factura.id}</h2>

      <p><strong>Cliente:</strong> {factura.cliente}</p>
      <p><strong>Fecha:</strong> {factura.fecha}</p>
      <p><strong>Estado:</strong> {factura.estado}</p>

      <h3>Productos</h3>

      <table className="detalle-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio (€)</th>
          </tr>
        </thead>
        <tbody>
          {factura.productos.map((p, i) => (
            <tr key={i}>
              <td>{p.nombre}</td>
              <td>{p.cantidad}</td>
              <td>{p.precio.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total: {factura.total.toFixed(2)} €</h3>

      <button className="btn-volver" onClick={() => navigate("/facturas")}>
        Volver
      </button>
    </div>
  );
};