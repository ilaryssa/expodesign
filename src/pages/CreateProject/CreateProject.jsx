import './CreateProject.css';
import {useNavigate} from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import tools from '../../data/tools.json';
import disciplines from '../../data/disciplines.json';

import ImgNotSelected from '../../assets/img-not-selected.png';

export default function CreateProject() {
  const navigate = useNavigate();

  return (
    <div className="create-project-container">
      <form className="create-project-form"> {/*criando o forms aqui*/}
          <div className="project-info">
            <input className='project-title' type='text' placeholder='ADICIONAR TÍTULO...' />
            <div className='project-group-inputs cover-input'>
              <div className='label-add-cover'>
                <label className='project-label'><BsPlusCircle />Adicionar capa</label>
                <input type='file' /> {/*o file aceita imagens*/}
              </div>
              <img src={ImgNotSelected} alt='Imagem não selecionada' className='project-cover-image' />
            </div>
            <div className='project-group-inputs'>
              <label className='project-label'><BsPlusCircle />Adicionar descrição e anexos</label>
              <textarea placeholder='Adicione sua descrição, links, códigos, anexos...'></textarea>
            </div>
            <div className='project-group-inputs'>
              <label className='project-label'><BsPlusCircle />Adicionar imagens</label>
              <input type='file' multiple/>
            </div>
            <img src={ImgNotSelected} alt='Imagem não selecionada' className='project-cover-image' />
            <img src={ImgNotSelected} alt='Imagem não selecionada' className='project-cover-image' />
            <img src={ImgNotSelected} alt='Imagem não selecionada' className='project-cover-image' />
          </div>
          <div className='project-extras'>
            <div className='project-group-inputs'/>
              <label className='project-label'><BsPlusCircle />Adicionar autor</label>
            <div className='author-input'>
              {/* <input type='text' placeholder='Nome do(s) autor(es)' /> */}
              <textarea placeholder='Adicione o(s) nome(s) do(s) autor(es)'></textarea>
              </div>
            
            <div className='project-group-inputs'>
              <label className='project-label'><BsPlusCircle/> Adicionar disciplinas</label>
              <div className='disciplines-box'>
              {disciplines.map((discipline, index) => (
                <div key={index} className="discipline-item">
                  <input type="checkbox" id={`discipline-${index}`} />
                  <label>{discipline.nome}</label>
                </div>
              ))}
              </div>
            </div>
            <div className='project-group-inputs'>
              <label className='project-label'><BsPlusCircle />Adicionar ferramentas</label>
              <div className='tools-box'>
                {tools.map((tool, index) => (
                <div key={index} className="tool-item">
                  <input type="checkbox" id={`tool-${index}`} />
                  <label>{tool.nome}</label>
                </div>
              ))} 
            </div>
          </div>
        </div>
      </form>
        <div className='buttons'> 
          <button type='submit' className='save'>Salvar</button>
          <button type='button' className='cancel' onClick={() => navigate(-1)}>Cancelar</button>
        </div>
    </div>
  );
}

