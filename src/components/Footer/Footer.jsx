import './Footer.css';
import { BsInstagram, BsWhatsapp, BsGeoAlt } from 'react-icons/bs';
import Logo from '../../assets/expodesign-logo.svg';
import SubmitProject from '../SubmitProject/SubmitProject';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-and-copyright">
        <div className="logo"><img src={Logo} alt="Expo Design Logo" /></div>
        <p className="copyright">© 2025 Todos os direitos reservados.</p>
      </div>

      <nav className="links">
        <div className="menu-and-button">
          <ul className="menu-footer">
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#aboutSite">Sobre o site</a></li>
          </ul>
          <SubmitProject />
        </div>

        <ul className="social-media">
          <li><BsGeoAlt size={24} /></li>
          <li><BsWhatsapp size={24} /></li>
          <li><BsInstagram size={24} /></li>
        </ul>
      </nav>
    </footer>
  );
}