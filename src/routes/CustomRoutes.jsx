import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { AxiosProvider } from "../hooks/useAxios";
import Aberturas from "../pages/Aberturas";
import Equipamiento from "../pages/Equipamiento";
import Home from "../pages/Home";
import Terminaciones from "../pages/Terminaciones";

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
