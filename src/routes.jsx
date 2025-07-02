import { Route, Routes } from "react-router-dom";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutTheSitePage from "./pages/AboutTheSitePage/AboutTheSitePage";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/projetos" element ={<ProjectsPage />} />
            <Route path="/sobre-o-site" element ={<AboutTheSitePage />} /> 
        </Routes>
    )
} 