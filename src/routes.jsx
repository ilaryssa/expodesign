import { Route, Routes } from "react-router-dom";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import CreateProject from './pages/CreateProject/CreateProject';
import AboutTheSitePage from "./components/AboutTheSite/AboutTheSite";

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/projetos" element ={<ProjectsPage />} />
            <Route path="/sobre-o-site" element ={<AboutTheSitePage />} />
            <Route path="/criar-projeto" element ={<CreateProject />} /> 
        </Routes>
    )
} 