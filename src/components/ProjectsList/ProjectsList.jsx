import ProjectsCard from "../ProjectCard/ProjectsCard";
import "./ProjectsList.css";

export default function ProjectsList({projetos}) {
  return (
    <div className="projects-list">
      {projetos.map((projeto) => (
        <ProjectsCard key={projeto.id} projeto={projeto}/>
      ))}
    </div>
  );
}