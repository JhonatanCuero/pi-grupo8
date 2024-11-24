import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import App from "./App";
import Menu from "./Menu";
import ErosionPage from './Erosion/introduccion/ErosionPage';  // Página de Erosión del Suelo
import Erosion2 from "./Erosion/sensibilizacion/Erosion2"; // Página de sensibilización de la erosión
import Erosion3 from "./Erosion/solucion/Erosion3"; // Página de soluciones de la erosión
import DeforestationPage from "./Deforestation/DeforestacionPage";  // Página de Deforestación
import BiodiversityPage from './biodiversidad/page1/BiodiversityPage';  // Página de Pérdida de Biodiversidad
import UserPage from './UserPage';  // Página de Usuario
import Sensibilization from './Deforestation/Sensibilization';
import Biodiversity2 from "./biodiversidad/page2/Biodiversity2"; //Página de sensibilización de biodiversidad

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
        <Route path="/erosion2" element={<Erosion2/>} />
        <Route path="/erosion3" element={<Erosion3/>} />

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
