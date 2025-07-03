import React from 'react';

const creators = [
  { name: 'Fulano', role: 'Design gráfico' },
  { name: 'Fulano', role: 'Design gráfico' },
  { name: 'Fulano', role: 'Design gráfico' },
  { name: 'Fulano', role: 'Design gráfico' },
];

const CreatorsSection = () => (
  <section className="creators-section">
    <h3>Idealizadores</h3>
    {creators.map((creator, index) => (
      <article key={index} className="creator-card">
        <figure className="photo-placeholder" aria-label="Photo Placeholder"></figure>
        <div>
          <h4>{creator.name}</h4>
          <p className="creator-role">{creator.role}</p>
          <p className="creator-description">
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