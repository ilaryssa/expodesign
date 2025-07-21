import './ProjectDetail.css'
import { useState } from 'react';
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";


export default function ProjectDetail({ project }) {
  const [fullScreenIndex, setFullScreenIndex] = useState(null);

  const openFullScreen = (index) => {
    setFullScreenIndex(index);
  };

  const closeFullScreen = () => {
    setFullScreenIndex(null);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setFullScreenIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setFullScreenIndex((prev) => (prev === project.images.length - 1 ? 0 : prev + 1));
  };

  const formatDescription = (text) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Divide o texto em partes entre links e não-links
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="highlighted-link"
        >
          {part}
        </a>
      );
    } else {
      return <span key={index}>{part}</span>;
    }
  });
};

  return (
    <div className="project-detail-container">
      <div>
        <h1 className="project-detail-title">{project.title}</h1>

        <img
          className="project-detail-image"
          src={project.cover || "/placeholder.png"}
          alt={project.title}
        />

        <section className="project-detail-description">
          <p className="description-title"><strong>Descrição</strong></p>
          <p>{formatDescription(project.description)}</p>
        </section>

        <section className="project-detail-gallery">
          <p className="gallery-title"><strong>Galeria</strong></p>
          <div className="gallery-container">
            {project.images && project.images.length > 0 ? (
              project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="project-detail-gallery-image"
                  onClick={() => openFullScreen(index)}
                />
              ))
            ) : (
              <p>Nenhuma imagem adicionada.</p>
            )}
          </div>
        </section>
      </div>

      {/* Modal de tela cheia */}
      {fullScreenIndex !== null && (
        <div className="fullscreen-overlay" onClick={closeFullScreen}>
          <button className="fullscreen-prev" onClick={prevImage}><BsArrowLeftCircleFill /></button>
          <img
            src={project.images[fullScreenIndex]}
            alt="Imagem em tela cheia"
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="fullscreen-next" onClick={nextImage}><BsArrowRightCircleFill /></button>
        </div>
      )}
    </div>
  );
}
