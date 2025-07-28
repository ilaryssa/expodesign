import './Footer.css';
import { BsInstagram, BsWhatsapp, BsGeoAlt } from 'react-icons/bs';
import Logo from '../../assets/expodesign-logo.svg?react';
import { Link } from 'react-router-dom';
import SubmitProject from '../SubmitProject/SubmitProject';

export default function Footer() {
  
  return (
    <footer className="footer">
      <div className="logo-and-copyright">
        <div className="logo">
          <Link to="/" className="logo"><Logo/></Link>
        </div>
        <p className="copyright">© 2025 ExpoDesign. Todos os direitos reservados.</p>
      </div>

      <nav className="links">
        <div className="menu-and-button" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <ul className="menu-footer" style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: 0, padding: 0, listStyle: 'none' }}>
            <li><Link to="/">Projetos</Link></li>
            <li><Link to="/sobre-o-site">Sobre o site</Link></li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SubmitProject />
          </div>
        </div>

        <ul className="social-media">
          <li>
            <a href="https://www.google.com/maps/place/UFC+-+Universidade+Federal+do+Cear%C3%A1+-+Campus+Quixad%C3%A1/@-4.9792321,-39.0565708,17z/data=!3m1!4b1!4m6!3m5!1s0x7be9e1bee212d41:0x705b4707028de537!8m2!3d-4.9792321!4d-39.0565708!16s%2Fg%2F11xm9xqnq?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <BsGeoAlt size={24} />
            </a>
          </li>
          <li>
            <a href="https://whatsapp.com/channel/0029Vb6OetWKLaHu86lcrE25" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ufcquixada" target="_blank" rel="noopener noreferrer">
              <BsInstagram size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}