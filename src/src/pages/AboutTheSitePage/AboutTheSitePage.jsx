import './AboutTheSitePage.css'
import Creators from "../../components/Creators/Creators";
import NavBar  from '../../components/NavBar/NavBar'
export default function AboutTheSitePage() {

    return (
     <>

        <main className="about-the-site-container">
            <section className="intro-section">
                <h2>Porque criar um site para mostrar Design Digital?</h2>
                <p>O curso de Design Digital da Universidade Federal do Ceará (UFC), campus Quixadá, é pioneiro e único em sua proposta no Brasil. Voltado para a criação, desenvolvimento e aplicação de conteúdos digitais, o curso combina design, tecnologia e criatividade para formar profissionais capazes de atuar em áreas como design gráfico, interfaces digitais, mídias interativas, jogos, animação e audiovisual. 
                <br />
                Com uma grade interdisciplinar e foco prático, os estudantes aprendem desde fundamentos do design até técnicas avançadas de programação, produção de vídeo, modelagem 3D e experiência do usuário (UX). O ambiente inovador do campus e os laboratórios equipados estimulam projetos experimentais, startups e colaboração com outras áreas como Computação, Engenharia de Software e Jogos Digitais.</p>
    
                <div className="image-placeholder" aria-label="Image Placeholder"></div>
            </section>
            <Creators/>
        </main>
     </>   

    );
}