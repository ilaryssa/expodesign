import './AboutTheSitePage.css'
import Creators from "../../components/Creators/Creators";
import Navbar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import ScrollToTopButton from '../../components/ScrollToTopButton/ScrollToTopButton.jsx';
export default function AboutTheSitePage() {

    return (
     <div className="about-the-site-page">
        <Navbar showSearchBar={false}/>
        <main className="about-the-site-container">
            <section className="intro-section">
                <h2>Por que criar um site para mostrar o curso de Design Digital?</h2>
                <br />
                <p>O curso de Design Digital da Universidade Federal do Ceará (UFC), campus Quixadá, é pioneiro e único em sua proposta no Brasil. Voltado para a criação, desenvolvimento e aplicação de conteúdos digitais, o curso combina design, tecnologia e criatividade para formar profissionais capazes de atuar em áreas como design gráfico, interfaces digitais, mídias interativas, jogos, animação e audiovisual. 
                <br />
                Com uma grade interdisciplinar e foco prático, os estudantes aprendem desde fundamentos do design até técnicas avançadas de programação, produção de vídeo, modelagem 3D e experiência do usuário (UX). O ambiente inovador do campus e os laboratórios equipados estimulam projetos experimentais, startups e colaboração com outras áreas como Computação, Engenharia de Software e Jogos Digitais.</p>
                <br />
                <div className="image-placeholder" aria-label="Image Placeholder">
        <img 
            src="https://i.ibb.co/21V9BP7J/Whats-App-Image-2025-07-23-at-13-59-54-1.jpg" 
            // src="https://www.frissononline.com.br/content/images/noticias/Not%C3%ADcias/UFC%20Quixad%C3%A1.jpeg" 
            alt="Design Digital UFC"
        />
    </div>
            </section>
            <Creators/>
            {/* <div className='scroll-to-top-button'>
            <ScrollToTopButton />
            </div> */}
        </main>
        <Footer />
     </div>   

    );
}