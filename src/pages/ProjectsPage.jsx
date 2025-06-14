import { useState } from "react";
import projects from "../data/projects.json";
import ProjectsList from "../components/ProjectsList/ProjectsList.jsx";
import Filter from "../components/Filter/Filter.jsx";

export default function ProjectsPage() {
  const [filter, setFilter] = useState(null);
  const clearFilter = () => setFilter(null);

  const filteredProjects = filter ? projects.filter((projeto) => {
    if(filter.tipo == "Ano") return projeto.ano === filter.value;
    if(filter.tipo == "Categoria") return projeto.tags.includes(filter.value);
    if(filter.tipo == "Disciplina") return projeto.disciplina === filter.value;
    if(filter.tipo == "Autor") return projeto.autor === filter.value;
    return true;
  })
  : projects;

  return (
    <div>
      <h1 className="projects-page-title">PROJETOS</h1>
      <Filter projects={projects} setFilter={setFilter} currentFilter={filter}/>
      <ProjectsList projeto={filteredProjects}/>
    </div>
  );
}
