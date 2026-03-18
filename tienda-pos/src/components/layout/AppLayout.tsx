import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import "../../styles/AppLayout.css";

export const AppLayout = () => {
 return (
  <div className="app-layout">
    <Sidebar />
    <div className="content">
      <Navbar />
      <Outlet />
    </div>
  </div>
);

};