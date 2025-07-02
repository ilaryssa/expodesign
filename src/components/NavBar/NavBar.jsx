import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs"; 
import { BsBoxArrowRight } from "react-icons/bs"; 
import  Logo from '../../assets/expodesign-logo.svg?react';
import './NavBar.css';
import SubmitProject from '../SubmitProject/SubmitProject';
import Alert from "../Alert/Alert"
import {useState} from 'react';


export default function Navbar() {
  const adminName = "Laryssa"; 

  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/projetos"); //criar a nova tela de usuario
    setOpenAlert(false); //obrigada laryssa
  }

  return (
    <>
      {openAlert && <Alert setOpen= {setOpenAlert} onConfirm={logout} />}  

      <header className="nav-bar">
        {/*logo*/}
        {/*<a href="expodesign-logo.svg"><img className="logo" src="logo.svg" alt="Logo" /></a>*/}

        <Link to="/projetos" className="logo"><Logo/></Link>

        {/*barra de pesquisa*/}
        <div className="search-bar">
            <span className="search-icon"><BsSearch/></span> 
            <input type="text" placeholder="Pesquisar por títulos, autores, tags..."/>
        </div>

        {/*rotas*/}
        <nav>
              <Link to="/projetos" className="underline-text-hover">PROJETOS</Link>
              <Link to="/sobre-o-site" className="underline-text-hover">SOBRE O SITE</Link>
              <SubmitProject />
              <a className='hello-admin'><span className="underline-text">Olá, {adminName}!</span></a>
              
              <button className="log-out" onClick={() =>setOpenAlert(true)}><BsBoxArrowRight /></button> 

        </nav>
      </header>
    </>

  );

}

