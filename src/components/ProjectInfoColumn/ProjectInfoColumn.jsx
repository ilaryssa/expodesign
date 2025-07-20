import "./ProjectInfoColumn.css"

export default function ProjectInfoColumn({ project }) {

    return(
        <div className="info-container">
            <p className="author-title"><strong>Autores</strong></p>
            {/* substituir por label */}
            <ul className="author-list">
                {project.authors.map((author, i) => (
                    <li key={i}>{author}</li>
                ))}
            </ul>

            <p><strong>Ano</strong></p>
            <li className="test-ano">{project.year}</li>

            <p className="subject-title"><strong>Disciplina</strong></p>
            <ul className="subject-list">
                {project.disciplines.map((subject, i) => (
                    <li key={i}>{subject.nome}</li>
                ))}
            </ul>

            <p className="tools-title"><strong>Ferramenta</strong></p>
            <ul className="tools-list">
                {project.tools.map((tool, i) => (
                    <li key={i}>{tool.nome}</li>
                ))}
            </ul>
        </div>
    );
}