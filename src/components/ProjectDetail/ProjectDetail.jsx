import './ProjectDetail.css'
import projects from "../../data/projects.json"
import {useParams} from "react-router-dom";

export default function ProjectDetail() {
    const { id } = useParams(); // obtém o ID do projeto da URL
    const projectId = parseInt(id);  
    const project = projects.find((p) => p.id === projectId); //encontra o projeto correspondente ao ID

    if(!project) return <p>Projeto não encontrado</p>;

    return(
        <div className="project-detail-container">
            <div>
                <h1 className="project-detail-title">{project.titulo}</h1>

                <img className="project-detail-image" src={project.imagem[0] || "/placeholder.png"} alt={project.titulo}/>
                {/* <Carousel/> */}
            
                <section className="project-detail-description">
                    <p className="description-title"><strong>Descrição</strong></p>
                    <p>{project.descricao}</p>
                </section>

                <section className="project-detail-gallery">
                    {project.imagem.slice(1).map((image, i) => (
                        <img className="project-detail-image" key={i} src={image || "/placeholder.png"} alt={`${project.titulo} - imagem ${i + 1}`}/>
                    ))}
                </section>
            </div>
        </div>
    );
}