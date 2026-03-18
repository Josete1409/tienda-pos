import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { ProductoFormPage } from "../pages/productos/ProductoFormPage";
import { ProductosListPage } from "../pages/productos/ProductosListPage";
import { FacturasListPage } from "../pages/facturas/FacturasListPage";
import { FacturaDetallePage } from "../pages/facturas/FacturaDetailPage";
import { AppLayout } from "../components/layout/AppLayout";
import { ClientesListPage } from "../pages/clientes/ClientesListPage";
import { ClienteNuevoPage } from "../pages/clientes/ClienteNuevoPage";
import { ClienteDetallePage } from "../pages/clientes/ClienteDetallePage";
import { ClienteEditarPage } from "../pages/clientes/ClienteEditarPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas privadas con layout */}
        <Route element={<AppLayout />}>
         {/* PRODUCTOS */}
          <Route path="/productos" element={<ProductosListPage />} />
          <Route path="/productos/nuevo" element={<ProductoFormPage />} />
          <Route path="/productos/editar/:id" element={<ProductoFormPage />} />

          {/* FACTURAS */}
          <Route path="/facturas" element={<FacturasListPage />} />
          <Route path="/facturas/:id" element={<FacturaDetallePage />} />

          {/* CLIENTES */}  
          <Route path="/clientes" element={<ClientesListPage />} />
          <Route path="clientes/nuevo" element={<ClienteNuevoPage />} />
          <Route path="clientes/:id/editar" element={<ClienteEditarPage />} />
          <Route path="clientes/:id" element={<ClienteDetallePage />} />

          {/* Aquí irán el resto de páginas */}
        </Route>

        {/* Cualquier ruta desconocida → login */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
