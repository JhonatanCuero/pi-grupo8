import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Menu from "./Menu";
import DeforestationPage from './DeforestacionPage';  // Página de Deforestación
import ErosionPage from './ErosionPage';  // Página de Erosión del Suelo
import BiodiversityPage from './BiodiversityPage';  // Página de Pérdida de Biodiversidad
import UserPage from './UserPage';  // Página de Usuario

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
        <Route path="/usuario" element={<UserPage />} />
      </Routes>
    </>
  );
};

/*
path: '*', // Ruta para 404 Not Found
element: <NotFound />, //Elemento pendiente de creacion, no olvidarse de importarlo after.
}*/

export default RoutesProject;
