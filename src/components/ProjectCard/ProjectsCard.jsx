import "./ProjectsCard.css"

export default function ProjectsCard({projeto}) {
  return (
    <div className="projects-card">
      <div className="image-box">
        <img src={projeto.imagem || "/placeholder.png"} alt={projeto.titulo}/>
        <div className="card-tags">
          {projeto.tags.map((tag, i) => (
            <span key={i} className="tag"> {tag} </span>
          ))}
        </div>
      </div>
        <h2 className="projects-card-title"> {projeto.titulo} </h2>
    </div>
  );
}