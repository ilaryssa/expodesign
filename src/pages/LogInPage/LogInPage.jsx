// import { BsEye } from 'react-icons/bs';
import './LogInPage.css';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../fireConfig";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const olaAdmin = "Olá, Admin! :)";

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                const user = userCredencial.user;
                console.log("usuário logado:", user.email);
                alert("Login realizado com sucesso!");
                navigate("/");
            })
            .catch((error) => {
                console.error("erro ao logar:", error);
                alert("Não foi possível fazer login.");
            });
    }
    
    return(
        <main className="login-container">
        <Link><BackButton/> </Link>
        <div className="ola-admin">{olaAdmin} </div>
            <section className='login-section'>
                <form className="login-content" onSubmit={handleLogin}>
                    <div className='email-container'>
                        <label className='email-label' >Email institucional</label>
                        <input className='email-input' type='email' id='email' aria-required title="email" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='senha-container'>
                        <label className='senha-label' >Senha</label>
                        <input className='senha-input' type='password' id='password' aria-required title="senha" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type='submit' className="botao-entrar" title="entrar"> Entrar</button>
                </form>
            </section>
        </main>
    );
}