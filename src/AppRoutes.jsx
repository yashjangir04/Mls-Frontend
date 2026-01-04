import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Query from "./pages/Query";
import About from "./pages/About"
import Clients from "./pages/Clients"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth pages */}
      <Route element={<AuthLayout />}>
        <Route path="/query" element={<Query />} />
      </Route>

      {/* Main app pages */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/client" element={<Clients />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
