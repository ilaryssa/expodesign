import ProjectsCard from "../ProjectCard/ProjectsCard";
import "./ProjectsList.css";

export default function ProjectsList({projeto}) {
  return (
    <div className="projects-list">
      {projeto.map((projeto) => (
        <ProjectsCard key={projeto.id} projeto={projeto}/>
      ))}
    </div>
  );
}