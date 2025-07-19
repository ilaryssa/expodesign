import './ProjectDetail.css'

export default function ProjectDetail({ project }) {

    return(
        <div className="project-detail-container">
            <div>
                <h1 className="project-detail-title">{project.title}</h1>

                <img className="project-detail-image" src={project.cover || "/placeholder.png"} alt={project.title}/>
                {/* <Carousel/> */}
            
                <section className="project-detail-description">
                    <p className="description-title"><strong>Descrição</strong></p>
                    <p>{project.description}</p>
                </section>

                <section className="project-detail-gallery">
                    <p className="gallery-title"><strong>Galeria</strong></p>
                    {project.images && project.images.length > 0 ? (
                        project.images.map((image, index) => (
                            <img key={index} src={image} alt={`Imagem ${index + 1}`} className="project-detail-gallery-image" />
                        ))
                    ) : (
                        <p>Nenhuma imagem adicionada.</p>
                    )}
                </section>
            </div>
        </div>
    );
}