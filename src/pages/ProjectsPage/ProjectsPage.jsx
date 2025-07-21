import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectsList from "../../components/ProjectsList/ProjectsList.jsx";
import Filter from "../../components/Filter/Filter.jsx"; 
import "./ProjectsPage.css";
import { BsPlusCircle } from "react-icons/bs";
import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Alert from "../../components/Alert/Alert.jsx"

import { onValue, ref, remove} from "firebase/database";
import { db } from "../../fireConfig.js";
//autenticacao
import { onAuthStateChanged } from "firebase/auth"; 
import {auth} from "../../fireConfig"

// importacao do css do project card para teste
import "../../components/ProjectCard/ProjectsCard.css";

export default function ProjectsPage() {
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // projetos do firebase
  const [projectsFirebase, setProjectsFirebase] = useState([]);

  //trazendo o alert da lixeira pra ca
  const [openAlert, setOpenAlert] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

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
      // Inverte a ordem para mostrar os mais recentes primeiro
      projectsTemp.reverse();
      
      setProjectsFirebase(projectsTemp);
    });
    
  }, []);
  //auth
  const [admLogin, setAdmLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAdmLogin(!!user); //user é padrao do auth
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleTrashClick = (projeto) => { 
    setProjectToDelete(projeto);
    setOpenAlert(true);
  }

  const handleDeleteProject = () => {
    if(!projectToDelete) return;
    remove(ref(db, `projects/${projectToDelete.id}`)).then(() => {
      setOpenAlert(false);
      setProjectToDelete(null);
    }).catch((error) => {
      alert("Erro ao excluir projeto:", error)
    })
  }

  const filteredProjects = filter ? projectsFirebase.filter((projeto) => {
    if(filter.tipo == "Ano") return projeto.year === filter.value;
    if(filter.tipo == "Disciplina"){
      return projeto.disciplines.some((discipline) => discipline.nome === filter.value);
    }
    if(filter.tipo == "Autor") return projeto.authors.includes(filter.value); //usa-se includes para verificar se o autor está na lista de autores do projeto para que apareça corretamente projetos com múltiplos autores
    //ta faltando o de ferramenta
    if(filter.tipo == "Ferramenta") {
      return projeto.tools.some((tool) => tool.nome === filter.value);
    }

    return true;
  })
  : projectsFirebase;

  return (
    <div className="projects-page-container">
      {openAlert && 
      <Alert setOpen={setOpenAlert}
      onConfirm={handleDeleteProject} 
      question={<>
        Você tem certeza que deseja excluir o projeto <br/>
        {projectToDelete?.title}?
      </>}
      confirm="Excluir" 
      cancel="Cancelar"
      />}
      <NavBar onSearch={handleSearch} />
      <div className="projects-page-header">
        <h1 className="projects-page-title">PROJETOS</h1>
        <div className="projects-actions">
          {/* <button className="button-new-project" onClick={() => navigate("/criar-projeto")}> <BsPlusCircle className="icon-button-new-project"/> Novo Projeto</button> */}
          {admLogin && <button className="button-new-project" onClick={() => navigate("/criar-projeto")}> <BsPlusCircle className="icon-button-new-project"/> Novo Projeto</button>}
          <Filter projects={projectsFirebase} setFilter={setFilter} currentFilter={filter}/>
        </div>
      </div>
        <ProjectsList projetos={filteredProjects} searchQuery={searchQuery} onTrashClick={handleTrashClick} canDelete={admLogin}/>
      <Footer />
    </div>
  );
}
