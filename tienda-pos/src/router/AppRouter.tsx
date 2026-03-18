import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { ProductoFormPage } from "../pages/productos/ProductoFormPage";
import { ProductosListPage } from "../pages/productos/ProductosListPage";
import { FacturasListPage } from "../pages/facturas/FacturasListPage";
import { FacturaDetallePage } from "../pages/facturas/FacturaDetailPage";
import { AppLayout } from "../components/layout/AppLayout";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<LoginPage />} />

        {/* Rutas privadas con layout */}
        <Route element={<AppLayout />}>
          <Route path="/productos" element={<ProductosListPage />} />
          <Route path="/productos/nuevo" element={<ProductoFormPage />} />
          <Route path="/productos/editar/:id" element={<ProductoFormPage />} />

          <Route path="/facturas" element={<FacturasListPage />} />
          <Route path="/facturas/:id" element={<FacturaDetallePage />} />

          {/* Aquí irán el resto de páginas */}
        </Route>

        {/* Cualquier ruta desconocida → login */}
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
