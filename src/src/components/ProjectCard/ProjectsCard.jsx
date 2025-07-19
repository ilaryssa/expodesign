import "./ProjectsCard.css"
import { BsTrash3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import { useState } from "react";
import { remove, ref } from "firebase/database";
import { db } from "../../fireConfig"; // Importando o database do Firebase
//esse import aqui vai ser pra chamar o database pra tirar os projetos do firebase


export default function ProjectsCard({projeto, projectDelete}) {

  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();



  const handleTrashClick = (e) => {
    e.preventDefault(); // e é o evento do clique e preventDefault é uma palavra reservada que impede o comportamento padrão do link  
    e.stopPropagation(); // stopPropagation impede que o evento de clique se propague para outros elementos, como o Link
    setOpenAlert(true);
  };
    //função que será responsável por deleter o projeto
  const handleDelete = async (e) => {
    e.preventDefault();
    // if(projectDelete) projectDelete(projeto.id);
    // setOpenAlert(false); // o alerta é fechado
    try {
      await remove(ref(db, `projects/${projeto.id}`));
      setOpenAlert(false);
      // Se quiser atualizar a lista, chame projectDelete se ela existir
      if (projectDelete) projectDelete(projeto.id);
    } catch (error) {
      alert("Erro ao excluir projeto: " + error.message);
    }
  }

  return (
    <>
    {openAlert && 
    <Alert setOpen={setOpenAlert} 
    onConfirm={handleDelete}
    message="Você clicou em excluir um projeto."
    question="Você tem certeza que deseja excluir este projeto?"
    confirm="Excluir"
    cancel="Cancelar"
    />}

    <Link to={`/projeto/${projeto.id}`}>
        <div className="projects-card">
          <div className="image-box">
            <img src={projeto.cover || "/placeholder.png"} alt={projeto.titulo}/>
            {/* <Link to="/sobre-o-site"> so um exemplo pra ver se ta funcionando */}
              <BsTrash3 className="projects-trash" alt="excluir" onClick={handleTrashClick} />
            {/* </Link> */}
            <div className="card-tags">
              {projeto.disciplines.map((discipline, i) => (
                  <span key={i} className="tag"> {discipline.nome} </span>
              ))}
            </div>
          </div>
            <h2 className="projects-card-title"> {projeto.title} </h2>
        </div>
    </Link>
    </>
  );
}