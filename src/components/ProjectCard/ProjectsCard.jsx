import "./ProjectsCard.css"
import { BsTrash3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import Alert from "../Alert/Alert";
// import { useState } from "react";
//esse import aqui vai ser pra chamar o database pra tirar os projetos do firebase


export default function ProjectsCard({projeto, onTrashClick, canDelete}) {
  // const [openAlert, setOpenAlert] = useState(false);
  // const navigate = useNavigate();

  // const logout = () => {
  //   navigate("/projetos");
  //   setOpenAlert(false);
  // }

  const handleTrashClick = (e) => {
    e.preventDefault(); // e é o evento do clique e preventDefault é uma palavra reservada que impede o comportamento padrão do link; isso ta sendo usado para que ao clicar no botao nao seja aberto a pagina de detalhes e sim o popup de exclusao
    e.stopPropagation(); // stopPropagation impede que o evento de clique se propague para outros elementos, como o Link
    onTrashClick(projeto);
  };

  return (
    <>
    {/* {openAlert && <Alert setOpen={setOpenAlert} onConfirm={logout}/>} */}
    
    <Link to={`/projeto/${projeto.id}`}>
        <div className="projects-card">
          <div className="image-box">
            <img src={projeto.cover || "/placeholder.png"} alt={projeto.titulo}/>
            {/* <Link to="/sobre-o-site"> so um exemplo pra ver se ta funcionando */}

              {/* <BsTrash3 className="projects-trash" alt="excluir" onClick={handleTrashClick} /> */}
              {canDelete && (
                <BsTrash3 className="projects-trash" alt="excluir" onClick={handleTrashClick} />
              )}

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