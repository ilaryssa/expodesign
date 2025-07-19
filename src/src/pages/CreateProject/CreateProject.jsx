import './CreateProject.css';
import { BsPlusCircle } from 'react-icons/bs';
import tools from '../../data/tools.json'; //nem precisa mais
import disciplines from '../../data/disciplines.json'; //nem precisa mais
import ImgNotSelected from '../../assets/img-not-selected.png';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Alert from '../../components/Alert/Alert';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseConfig';
import { db } from "../../fireConfig";
import { useState } from 'react';
import { push, set , ref} from 'firebase/database';

export default function CreateProject() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  // arquivo da capa e url publica da capa
  const [cover, setCover] = useState();
  const [coverFile, setCoverFile] = useState();

  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  const [author, setAuthor] = useState("");
  const [disciplinesSelected, setDisciplinesSelected] = useState([]);
  const [toolsSelected, setToolsSelected] = useState([]);

  const [images, setImages] = useState([]);
  const [imagesFiles, setImagesFiles] = useState([]);

  const [openAlert, setOpenAlert] = useState(false);

  const handleSave = () => {
    navigate("/"); 
    setOpenAlert(false);
  }

  function handleCover(e) {
    setCover(URL.createObjectURL(e.target.files[0]));
    setCoverFile(e.target.files[0]);
  }

  function handleImageChange(e) {
    const files = Array.from(e.target.files);
    setImagesFiles(prevFiles => [...prevFiles, ...files]);

    const urls = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...urls]);
  }

  function removeImage(index) {
    // remove da url local
    const urlToRevoke = images[index];
    URL.revokeObjectURL(urlToRevoke);

    const updatedImages = images.filter((image, i) => i !== index);
    setImages(updatedImages);

    // remove dos arquivos files
    const updatedFiles = imagesFiles.filter((file, i) => i !== index);
    setImagesFiles(updatedFiles);
  }



  function handleSelectedDiscipline(discipline) {
    if (disciplinesSelected.includes(discipline)) {
      setDisciplinesSelected(disciplinesSelected.filter(d => d !== discipline));
    }
    else {
      setDisciplinesSelected([...disciplinesSelected, discipline]);
    }
  }

  function handleSelectedTool(tool) {
    if (toolsSelected.includes(tool)) {
      setToolsSelected(toolsSelected.filter(t => t !== tool));
    }
    else {
      setToolsSelected([...toolsSelected, tool]);
    }
  }

  async function sendToSupabase(file) {
    try {
      // cria um caminho único para o arquivo
      const path = 'projects/' + Date.now() + '-' + file.name;

      // envia o arquivo para o storage do supabase
      await supabase.storage.from("imagens").upload(path, file);

      // obtém a URL pública do arquivo enviado
      const { data } = supabase.storage.from("imagens").getPublicUrl(path);
      return data.publicUrl;

    } catch (error) {
      console.error('Erro ao enviar arquivo para o Supabase:', error);
    }
  }

  async function handleSubmit() {
    try {
      // enviar a capa para o Supabase e remover a url local
      const coverUrl = await sendToSupabase(coverFile);
      URL.revokeObjectURL(cover);
      setCover("");

      console.log("cover apos atualização ", cover);

      // enviar as imagens para o supabase e remover as urls locais
      const imageUrls = await Promise.all(imagesFiles.map(async (file, index) => {
        const url = await sendToSupabase(file);
        URL.revokeObjectURL(images[index]);
        return url;
      }));

      setImages([]);

      // separa os nomes dos autores
      const authorsArray = author.split('\n').map(name => name.trim());

      // criar o objeto do projeto
      const NewProject = {
        title: title,
        cover: coverUrl,
        description: description,
        images: imageUrls,
        authors: authorsArray,
        year: year,
        disciplines: disciplinesSelected,
        tools: toolsSelected,
      }

      // enviar para o firebase

      // cria uma referencia para a coleção de projetos
      const projectsRef = ref(db, 'projects');

      const newProjectRefId = push(projectsRef);

      await set(newProjectRefId, NewProject);

      alert('Projeto criado com sucesso!');
      setOpenAlert(false);
      navigate("/");

    } catch (error) {
      console.error('Erro ao criar o projeto:', error);

    }
  }

  return (
    <>
    {openAlert && 
      <Alert setOpen= {setOpenAlert} 
      onConfirm={handleSubmit}
      message='Após publicar o projeto, você não conseguirá mais editar as informações, apenas excluir.'
      question="Você tem certeza que quer publicar este projeto?"
      cancel="Cancelar" 
      confirm="Continuar"
    />} 

    <NavBar />
    <div className="create-project-container">
      <form className="create-project-form"> {/*criando o forms aqui*/}
        <div className="project-info">
          <input onChange={e => setTitle(e.target.value)} className='project-title' type='text' placeholder='ADICIONAR TÍTULO...' />
          <div className='project-group-inputs cover-input'>
            <div className='label-add-cover'>
              <label className='project-label'><BsPlusCircle />Adicionar capa</label>
              <input type='file' onChange={e => handleCover(e)} />
            </div>
            <img src={cover ? cover : ImgNotSelected} alt='Imagem não selecionada' className='project-cover-image' />
          </div>
          <div className='project-group-inputs'>
            <label className='project-label'><BsPlusCircle />Adicionar descrição e anexos</label>
            <textarea onChange={e => setDescription(e.target.value)} placeholder='Adicione sua descrição, links, códigos, anexos...'></textarea>
          </div>
          <div className='project-group-inputs'>
            <label className='project-label'><BsPlusCircle />Adicionar imagens</label>
            <div className='images-input'>
              <input type='file' multiple onChange={handleImageChange} />
            </div>
            <div className='images-preview'>
              {images.length > 0 ? (
                images.map((image, index) => (
                  <>
                    <img key={index} src={image} alt={`Imagem ${index + 1}`} className='project-image' />
                    <button type='button' className='remove-image-button' onClick={() => removeImage(index)}>
                      Remover
                    </button>

                  </>
                ))
              ) : (
                <p>Nenhuma imagem adicionada.</p>
              )}
            </div>
          </div>
        </div>
        <div className='project-extras'>
          <div className='project-group-inputs' />
          <label className='project-label'><BsPlusCircle />Adicionar autor</label>
          <div className='author-input'>
            <textarea onChange={e => setAuthor(e.target.value)} placeholder='Adicione o(s) nome(s) do(s) autor(es)'></textarea>
          </div>
          <label className='project-label'><BsPlusCircle />Adicionar ano</label>
          <div className='year-input'>
            <input onChange={e => setYear(e.target.value)} type='number' placeholder='Adicione o ano'/>
          </div>

          <div className='project-group-inputs'>
            <label className='project-label'><BsPlusCircle /> Adicionar disciplinas</label>
            <div className='disciplines-box'>
              {disciplines.map((discipline, index) => (
                <div key={index} className="discipline-item">
                  <input onChange={() => handleSelectedDiscipline(discipline)} type="checkbox" id={`discipline-${index}`} />
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
                  <input onChange={() => handleSelectedTool(tool)} type="checkbox" id={`tool-${index}`} />
                  <label>{tool.nome}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
      <div className='buttons'>
        <button onClick={() => setOpenAlert(true)} type='button' className='save'>Salvar</button>
        <button type='button' className='cancel' onClick={() => navigate(-1)}>Cancelar</button>
      </div>
    </div>
    <Footer />
    </>
  );
}

