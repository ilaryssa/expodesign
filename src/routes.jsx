import { Route, Routes } from "react-router-dom";
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import CreateProject from './pages/CreateProject/CreateProject';
import AboutTheSitePage from "./pages/AboutTheSitePage/AboutTheSitePage";
import ProjectDetailPage from "./pages/ProjectDetailPage/ProjectDetailPage";
import LogInPage from "./pages/LogInPage/LogInPage";

export default function AppRoutes(){
    return(
        <Routes>
            <Route index element={<ProjectsPage />} />
            <Route path="/sobre-o-site" element={<AboutTheSitePage />} />
            <Route path="/criar-projeto" element={<CreateProject />} /> 
            <Route path="/projeto/:id" element={<ProjectDetailPage />} />
            <Route path="/login" element={<LogInPage />} />
        </Routes>

    )
} 