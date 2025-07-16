import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs"; 
import  Logo from '../../assets/expodesign-logo.svg?react';
import './NavBar.css';
import SubmitProject from '../SubmitProject/SubmitProject';
import Alert from "../Alert/Alert"
import {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";


export default function Navbar({onSearch}) {
  const adminName = "Laryssa"; 

  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login"); 
    setOpenAlert(false); 
  }
  

  return (
    <>
      {openAlert && 
      <Alert setOpen= {setOpenAlert} 
      onConfirm={logout}
      question="Você tem certeza que quer sair?"
      confirm="Sair"
      cancel="Voltar" 
      />}  

      <header className="nav-bar">

        <Link to="/" className="logo"><Logo/></Link>

        {/*barra de pesquisa*/}
        <div className="search-bar">
          <SearchBar onSearch={onSearch} />
        </div>

        {/*rotas*/}
        <nav>
              <Link to="/" className="underline-text-hover">PROJETOS</Link>
              <Link to="/sobre-o-site" className="underline-text-hover">SOBRE O SITE</Link>
              
              <SubmitProject />
              
              <a className='hello-admin'><span className="underline-text">Olá, {adminName}!</span></a>
              
              <button className="log-out" onClick={() =>setOpenAlert(true)}><BsBoxArrowRight /></button> 
              <Link to='/login'>Login</Link>
        </nav>
      </header>
    </>

  );

}

