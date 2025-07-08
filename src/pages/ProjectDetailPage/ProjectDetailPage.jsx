import ProjectInfoColumn from "../../components/ProjectInfoColumn/ProjectInfoColumn.jsx";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail.jsx";
import "./ProjectDetailPage.css"

export default function ProjectDetailPage() {

    return(
        <div className="page-detail-container">
            <ProjectDetail/>
            <ProjectInfoColumn/>
        </div>
    );
}