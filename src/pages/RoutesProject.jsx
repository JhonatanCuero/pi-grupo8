import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Menu from "./Menu";
import DeforestacionPage from "./Deforestation/DeforestacionPage";  // Página de Deforestación
import ErosionPage from './Erosion/ErosionPage';  // Página de Erosión del Suelo
import BiodiversityPage from './biodiversidad/BiodiversityPage';  // Página de Pérdida de Biodiversidad
import UserPage from './UserPage';  // Página de Usuario
import Sensibilization from './Deforestation/Sensibilization';
import Biodiversity2 from "./biodiversidad/Biodiversity2"; //Página de sensibilización

const RoutesProject = () => {
  return (
    <BrowserRouter>
      <ContentWithConditionalMenu />
    </BrowserRouter>
  );
};

const ContentWithConditionalMenu = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Menu />}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deforestacion" element={<DeforestationPage />} />
        <Route path="/erosion" element={<ErosionPage />} />
        <Route path="/biodiversidad" element={<BiodiversityPage />} />
        <Route path="/biodiversidad2" element={<Biodiversity2/>} />
        <Route path="/usuario" element={<UserPage />} />
        <Route path="/Sensibilization" element ={<Sensibilization />} />
      </Routes>
    </>
  );
};

/*
path: '*', // Ruta para 404 Not Found
element: <NotFound />, //Elemento pendiente de creacion, no olvidarse de importarlo after.
}*/

export default RoutesProject;
