import './footer.css';
import { BsInstagram, BsWhatsapp, BsGeoAlt } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logoAndCopyright">
        <div className="logo"> {/* Logo */} </div>
        <p className="copyright"> © 2025 Todos os direitos reservados. </p>
      </div>

      <nav className="links">
        <ul className="menuFooter">
          <li><a href="#digitalDesign">Digital Design</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#info">Informações</a></li>
          <li><a href="#aboutSite">Sobre o site</a></li>
        </ul>

        <ul className="socialMedia">
          <li><BsGeoAlt size={24} /></li>
          <li><BsWhatsapp size={24} /></li>
          <li><BsInstagram size={24} /></li>
        </ul>
      </nav>
    </footer>
  );
}
