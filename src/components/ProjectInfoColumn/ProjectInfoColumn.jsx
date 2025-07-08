import "./ProjectnfoColumn.css"
import projects from "../../data/projects.json"
import { useParams } from "react-router-dom";

export default function ProjectInfoColumn() {
    const { id } = useParams(); 
    const projectId = parseInt(id);
    const project = projects.find((p) => p.id === projectId);
    
    return(
        <div className="info-container">
            <p className="author-title"><strong>Autores</strong></p>
            {/* substituir por label */}
            <ul className="author-list">
                {project.autor.map((author, i) => (
                    <li key={i}>{author}</li>
                ))}
            </ul>

            <p><strong>Ano</strong></p>
            <li className="test-ano">{project.ano}</li>

            <p className="subject-title"><strong>Disciplina</strong></p>
            <ul className="subject-list">
                {project.disciplina.map((subject, i) => (
                    <li key={i}>{subject}</li>
                ))}
            </ul>

            <p className="tools-title"><strong>Ferramenta</strong></p>
            <ul className="tools-list">
                {project.ferramenta.map((tool, i) => (
                    <li key={i}>{tool}</li>
                ))}
            </ul>
        </div>
    );
}