import { useState } from "react";
import { useNavigate } from "react-router-dom";
import projects from "../../data/projects.json";
import ProjectsList from "../../components/ProjectsList/ProjectsList.jsx";
import Filter from "../../components/Filter/Filter.jsx"; 
import "./ProjectsPage.css";
import { BsPlusCircle } from "react-icons/bs";

export default function ProjectsPage() {
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();

  const filteredProjects = filter ? projects.filter((projeto) => {
    if(filter.tipo == "Ano") return projeto.ano === filter.value;
    if(filter.tipo == "Categoria") return projeto.tags.includes(filter.value);
    if(filter.tipo == "Disciplina") return projeto.disciplina.includes(filter.value);
    if(filter.tipo == "Autor") return projeto.autor.includes(filter.value); //usa-se includes para verificar se o autor está na lista de autores do projeto para que apareça corretamente projetos com múltiplos autores
    return true;
  })
  : projects;

  return (
    <div className="projects-page-container">
      <div className="projects-page-header">
        <h1 className="projects-page-title">PROJETOS</h1>
        <div className="projects-actions">
          <button className="button-new-project" onClick={() => navigate("/criar-projeto")}> <BsPlusCircle className="icon-button-new-project"/> Novo Projeto</button>
          <Filter projects={projects} setFilter={setFilter} currentFilter={filter}/>
        </div>
      </div>
        <ProjectsList projeto={filteredProjects}/>
    </div>
  );
}
