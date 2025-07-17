import ProjectInfoColumn from "../../components/ProjectInfoColumn/ProjectInfoColumn.jsx";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail.jsx";
import "./ProjectDetailPage.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../fireConfig.js";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

export default function ProjectDetailPage() {
    const { id } = useParams(); // obtém o ID do projeto da URL
    const [project, setProject] = useState(null);


    useEffect(() => {
        const projectRef = ref(db, `projects/${id}`);
        onValue(projectRef, (snapshot) => {
            const data = snapshot.val();
            setProject({
                id: id,
                ...data
            })
            
        });

    },[id])

    return(
        <>
        <Navbar showSearchBar={false}/>
        <div className="page-detail-container">
            {project ? (
                <>
                    <ProjectDetail project={project} />
                    <ProjectInfoColumn project={project} />
                </>
            ) : (
                <p>Carregando projeto...</p>
            )}
        </div>
        <Footer />
        </>
    );
}