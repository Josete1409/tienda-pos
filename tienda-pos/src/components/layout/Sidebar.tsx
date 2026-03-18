import { NavLink } from "react-router-dom";
import "../../styles/Sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">TIENDA POS</h2>

      <nav className="sidebar-nav">
        <NavLink to="/productos" className="sidebar-link">
          Productos
        </NavLink>

        <NavLink to="/facturas" className="sidebar-link">
          Facturas
        </NavLink>

        <NavLink to="/clientes" className="sidebar-link">
          Clientes
        </NavLink>

        <NavLink to="/empleados" className="sidebar-link">
          Empleados
        </NavLink>

        <NavLink to="/pos" className="sidebar-link">
          Caja
        </NavLink>
      </nav>
    </aside>
  );
};