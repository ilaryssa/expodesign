// import { BsEye } from 'react-icons/bs';
import './LogInPage.css';
import { Link } from 'react-router-dom';
import BackButton from '../../components/BackButton/BackButton';

export default function LogInPage() {
    const olaAdmin = "Olá, Admin! :)";
    
    return(
        <main className="login-container">
        <Link><BackButton/> </Link>
        <div className="ola-admin">{olaAdmin} </div>
            <section>
                <form className="login-content" >
                    <div className='email-container'>
                        <label className='email-label' >Email institucional</label>
                        <input className='email-input' type='email' id='email' aria-required title="email"/>
                    </div>
                    <div className='senha-container'>
                        <label className='senha-label' >Senha</label>
                        <input className='senha-input' type='password' id='password' aria-required title="senha"/>
                    </div>
                    <button type='submit' className="botao-entrar" title="entrar"> Entrar</button>
                </form>
            </section>
        </main>
    );
}