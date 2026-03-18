import "../../styles/Navbar.css";

export const Navbar = () => {
  // Más adelante esto vendrá del AuthContext
  const empleadoMock = {
    nombre: "Empleado Demo",
  };

  const handleLogout = () => {
    console.log("Logout simulado");
    // Más adelante: limpiar sesión y navegar a /login
  };

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h3>Panel de gestión</h3>
      </div>

      <div className="navbar-right">
        <span className="navbar-user">{empleadoMock.nombre}</span>
        <button className="navbar-logout" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </div>
    </header>
  );
};