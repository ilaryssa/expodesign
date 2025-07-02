//tu criou vários componentes dentro do AboutThisSite, esses componentes --por padrão -- ficam melhor separados em pastas.
//cria uma pasta com o nome do componente, por exemplo CreatorsSection 
//dentro da pasta exemplo CreatorsSection, cria um arquivo JSX (e CSS, se necessário)
//depois você vai importar todos esses componentes juntos arquivo AboutThisSitePage que deve ser criado na pasta pages (já existente), você pode se basear na ProjectsPage.jsx


import React from 'react'; // não precisa importar esse react
import './aboutTheSite.css'; //o seu arquivo css começa com o letra
import IntroSection from './components/IntroSection'; //não precisa colocar a pasta components, porque os arquivos já estão na mesma pagina(AboutThisSite)
import CreatorsSection from './components/CreatorsSection';
import ScrollToTopButton from './components/ScrollToTopButton';
//como o certo é criar o componente dentro de uma pasta com o mesmo nome do arquivo jsx dele, você vai precisar entrar na pasta do 'components', depois na pasta do componente em si e depois chama o arquivo jsx (se ficar con duvida, avisa, por é meio complicadinho mesmo)

const AboutTheSite = () => (
  <main className="aboutTheSiteContainer">
    <IntroSection />
    <CreatorsSection />
    <ScrollToTopButton />
  </main>
);

export default AboutTheSite;