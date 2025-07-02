import React from 'react';  //comentário Thayná: isso aqui já foi importado no app, então não precisa colocar nos componentes

const creators = [
  { name: 'Fulano', role: 'Design gráfico' },
  { name: 'Fulano', role: 'Design gráfico' },
  { name: 'Fulano', role: 'Design gráfico' },
  { name: 'Fulano', role: 'Design gráfico' },
]; 

const CreatorsSection = () => (
  <section className="creatorsSection">
    <h3>Idealizadores</h3>
    {creators.map((creator, index) => (
      <article key={index} className="creatorCard">
        <figure className="photoPlaceholder" aria-label="Photo Placeholder"></figure>
        <div>
          <h4>{creator.name}</h4>
          <p className="creatorRole">{creator.role}</p>
          <p className="creatorDescription">
            texto falando sobre fulano, o que faz como designer, redes sociais,
            informações relevantes. texto falando sobre fulano, o que faz como
            designer, redes sociais, informações relevantes.
          </p>
        </div>
      </article>
    ))}
  </section>
);

export default CreatorsSection;
