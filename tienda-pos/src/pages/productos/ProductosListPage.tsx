import "../../styles/ProductosListPage.css";
import { useNavigate } from "react-router-dom";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  activo: boolean;
};

const productosMock: Producto[] = [
  { id: 1, nombre: "Camiseta básica", precio: 9.99, stock: 25, activo: true },
  { id: 2, nombre: "Pantalón vaquero", precio: 29.9, stock: 10, activo: true },
  {
    id: 3,
    nombre: "Sudadera con capucha",
    precio: 39.5,
    stock: 5,
    activo: false,
  },
];

export const ProductosListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="productos-page">
      <div className="productos-header">
        <h2>Lista de Productos</h2>
        <button
          className="btn-nuevo-producto"
          onClick={() => navigate("/productos/nuevo")}
        >
          Nuevo producto
        </button>
      </div>

      <table className="productos-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio (€)</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosMock.map((p) => (
            <tr key={p.id}>
              <td>{p.nombre}</td>
              <td>{p.precio.toFixed(2)}</td>
              <td>{p.stock}</td>
              <td>{p.activo ? "Activo" : "Inactivo"}</td>
              <td>
                <button
                  className="btn-accion"
                  onClick={() => navigate(`/productos/editar/${p.id}`)}
                >
                  Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
