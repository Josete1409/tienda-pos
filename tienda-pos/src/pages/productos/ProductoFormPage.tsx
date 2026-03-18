import "../../styles/ProductoFormPage.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Datos mock
const productosMock = [
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

export const ProductoFormPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const esEdicion = Boolean(id);

  // Buscar producto inicial si estamos editando
  const productoInicial = esEdicion
    ? productosMock.find((p) => p.id === Number(id))
    : null;

  // Estado inicial basado en productoInicial
  const [nombre, setNombre] = useState(productoInicial?.nombre ?? "");
  const [precio, setPrecio] = useState(
    productoInicial?.precio?.toString() ?? "",
  );
  const [stock, setStock] = useState(productoInicial?.stock?.toString() ?? "");
  const [activo, setActivo] = useState(productoInicial?.activo ?? true);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(
      esEdicion ? "Producto actualizado (mock)" : "Producto creado (mock)",
    );

    navigate("/productos");
  };

  return (
    <div className="producto-form-page">
      <h2>{esEdicion ? "Editar Producto" : "Nuevo Producto"}</h2>

      <form className="producto-form" onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

        <label>
          Precio (€)
          <input
            type="number"
            step="0.01"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </label>

        <label>
          Stock
          <input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={activo}
            onChange={(e) => setActivo(e.target.checked)}
          />
          Activo
        </label>

        <div className="form-buttons">
          <button type="submit" className="btn-guardar">
            Guardar
          </button>

          <button
            type="button"
            className="btn-cancelar"
            onClick={() => navigate("/productos")}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};
