import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/layout/Layout";
import Page from "../components/page/Page";
import { AxiosProvider } from "../hooks/useAxios";

function CustomRoutes() {
  return (
    <AxiosProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aberturas" element={<Page>Aberturas</Page>} />
          <Route path="/equipamiento" element={<Page>Equipamiento</Page>} />
          <Route path="/terminaciones" element={<Page>Terminaciones</Page>} />
        </Routes>
      </Layout>
    </AxiosProvider>
  );
}

export default CustomRoutes;
