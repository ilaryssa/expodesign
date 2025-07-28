import './Creators.css';

export default function Creators() {
    const creators = [
        { 
            name: 'Ianara Sítila',
            area: 'Design digital',
            description: 'Descobrindo sempre novas formas de me encontrar no Design Digital. O Design é uma forma de arte que pode mudar a sua vida.',
            img: "https://i.ibb.co/20b24fZj/image.png"
        },
        { 
            name: 'Laryssa Santos',
            area: 'Design digital',
            description: 'Me movimento pelo design gráfico, editorial e 3D, buscando criar experiências visuais que proporcionem algo único em cada projeto.',
            img: "https://i.ibb.co/scLbRqq/image.png"
        },
        // { 
        //     name: 'Lazaro Freitas',
        //     area: 'Design digital',
        //     description: 'Apaixonado por explorar o potencial do design, tem grande interesse por áreas criativas, como branding, ilustração, estamparia, design de personagens e criação de materiais publicitários.',
        //     img: "https://i.ibb.co/R4Bpn73p/image.png"
        // },
        { 
            name: 'Thayná Cavalcante',
            area: 'Design digital',
            description: 'Ainda está à procura da sua área de atuação no Design, então não se limita quando encontra novos desafios, como este projeto em questão. Busca sempre aprimorar seus poucos conhecimentos do universo que é o Design.',
            img: "https://i.ibb.co/MDS8KtYF/image.png" 
        },
    ];

    return (
        <section className="creators-section">
            <h3>Idealizadores</h3>
            {creators.map((creator, index) => (
                <article key={index} className="creator-card">
                    <img 
                        src={creator.img} 
                        className='photo-placeholder' 
                        alt={creator.name} 
                    />
                    <div>
                        <h4>{creator.name}</h4>
                        <p className="creator-area">{creator.area}</p>
                        <p className="creator-description">{creator.description}</p>
                    </div>
                </article>
            ))}
        </section>
    )
}