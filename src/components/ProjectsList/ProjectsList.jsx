import ProjectsCard from "../ProjectCard/ProjectsCard";
import "./ProjectsList.css";

export default function ProjectsList({projetos, searchQuery, onTrashClick, canDelete}) {
  console.log("projetos", projetos);
    const projetosFiltrados = projetos.filter((projeto) =>
    projeto.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );
  
  return (
    <div className="projects-list">
      {projetosFiltrados.map((projeto) => (
        <ProjectsCard 
        key={projeto.id} projeto={projeto} onTrashClick={() => onTrashClick(projeto)} canDelete={canDelete}/>
      ))}

      
    </div>
  );
}