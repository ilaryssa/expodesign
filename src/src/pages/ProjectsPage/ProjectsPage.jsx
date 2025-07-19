import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsList from "../../components/ProjectsList/ProjectsList.jsx";
import Filter from "../../components/Filter/Filter.jsx"; 
import "./ProjectsPage.css";
import { BsPlusCircle } from "react-icons/bs";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";


import { onValue, ref } from "firebase/database";
import { db } from "../../fireConfig.js";

// importacao do css do project card para teste
import "../../components/ProjectCard/ProjectsCard.css";

export default function ProjectsPage() {
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // projetos do firebase
  const [projectsFirebase, setProjectsFirebase] = useState([]);

  useEffect(() => {
    const projectsRef = ref(db, 'projects');
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      
      let projectsTemp = [];

      for (let id in data) {
        projectsTemp.push({
          id: id,
          ...data[id]
        });
      }
      setProjectsFirebase(projectsTemp);
    });

  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredProjects = filter ? projectsFirebase.filter((projeto) => {
    if(filter.tipo == "Ano") return projeto.year === filter.value;
    if(filter.tipo == "Disciplina"){
      return projeto.disciplines.some((discipline) => discipline.nome === filter.value);
    }
    if(filter.tipo == "Autor") return projeto.authors.includes(filter.value); //usa-se includes para verificar se o autor está na lista de autores do projeto para que apareça corretamente projetos com múltiplos autores
    return true;
  })
  : projectsFirebase;

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };



  return (
    <div className="projects-page-container">
      <NavBar onSearch={handleSearch} />
      <div className="projects-page-header">
        <h1 className="projects-page-title">PROJETOS</h1>
        <div className="projects-actions">
          <button className="button-new-project" onClick={() => navigate("/criar-projeto")}> <BsPlusCircle className="icon-button-new-project"/> Novo Projeto</button>
          <Filter projects={projectsFirebase} setFilter={setFilter} currentFilter={filter}/>
        </div>
      </div>
        <ProjectsList projetos={filteredProjects} searchQuery={searchQuery}/>
      <Footer />
    </div>
  );
}
