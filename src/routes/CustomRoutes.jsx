import { Route, Routes } from "react-router-dom";

// Components
import Layout from "../components/layout/Layout";

// Pages
import Aberturas from "../pages/Aberturas";
import Equipamiento from "../pages/Equipamiento";
import Home from "../pages/Home";
import Terminaciones from "../pages/Terminaciones";

// Hooks
import { AxiosProvider } from "../hooks/useAxios";

function CustomRoutes() {
  return (
    <AxiosProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aberturas" element={<Aberturas />} />
          <Route path="/equipamiento" element={<Equipamiento />} />
          <Route path="/terminaciones" element={<Terminaciones />} />
        </Routes>
      </Layout>
    </AxiosProvider>
  );
}

export default CustomRoutes;
