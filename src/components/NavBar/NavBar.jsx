import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs"; 
import { BsBoxArrowRight } from "react-icons/bs"; 
import  Logo from '../../assets/expodesign-logo.svg?react';
import './NavBar.css';
import SubmitProject from '../SubmitProject/SubmitProject';
import Alert from "../Alert/Alert"
import {useState} from 'react';
import SearchBar from "../SearchBar/SearchBar";


export default function Navbar({ onSearch, showSearchBar = true }) {
  const adminName = "Laryssa"; 

  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login"); //criar a nova tela de usuario
    setOpenAlert(false); //obrigada laryssa
  }



  return (
    <>
      {openAlert && <Alert setOpen= {setOpenAlert} onConfirm={logout} />}  

      <header className="nav-bar">
        {/*logo*/}
        {/*<a href="expodesign-logo.svg"><img className="logo" src="logo.svg" alt="Logo" /></a>*/}

        <Link to="/" className="logo"><Logo/></Link>

        {/*barra de pesquisa*/}

      {showSearchBar && (
        <div className="search-bar">
          <SearchBar onSearch={onSearch} />
        </div>
      )}

        {/*rotas*/}
        <nav>
              <Link to="/" className="underline-text-hover">PROJETOS</Link>
              <Link to="/sobre-o-site" className="underline-text-hover">SOBRE O SITE</Link>
              <SubmitProject />
              <a className='hello-admin'><span className="underline-text">Olá, {adminName}!</span></a>
              
              <button className="log-out" onClick={() =>setOpenAlert(true)}><BsBoxArrowRight /></button> 
              <Link to="/login" > Login </Link>

        </nav>
      </header>
    </>

  );

}

