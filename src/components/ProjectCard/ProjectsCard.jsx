import "./ProjectsCard.css"
import { BsTrash3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../Alert/Alert";
import { useState } from "react";

export default function ProjectsCard({projeto, projectDelete}) {
  
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  //responsável por chamar o alerta, para o usuário confirmar que realmente quer apgar o projeto
  const handleTrashClick = (e) => {
    e.preventDefault(); // e é o evento do clique e preventDefault é uma palavra reservada que impede o comportamento padrão do link  
    e.stopPropagation(); // stopPropagation impede que o evento de clique se propague para outros elementos, como o Link
    setOpenAlert(true);
  };
  //função que será responsável por deleter o projeto
  const handleDelete = (e) => {
    e.preventDefault();
    if(projectDelete) projectDelete(projeto.id);
    setOpenAlert(false); // o alerta é fechado
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
            <img src={projeto.imagem[0] || "/placeholder.png"} alt={projeto.titulo}/>
            {/* <Link to="/sobre-o-site"> so um exemplo pra ver se ta funcionando */}
              <BsTrash3 className="projects-trash" alt="excluir" onClick={handleTrashClick} />
            {/* </Link> */}
            <div className="card-tags">
              {projeto.tags.map((tag, i) => (
                  <span key={i} className="tag"> {tag} </span>
              ))}
            </div>
          </div>
            <h2 className="projects-card-title"> {projeto.titulo} </h2>
        </div>
    </Link>
    </>
  );
}