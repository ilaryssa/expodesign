import './Creators.css';

export default function Creators() {
    const creators = [
        { 
            name: 'Ianara Sítila',
            area: 'Design digital',
            description: 'texto descritivo de cada idealizador',
            img: "https://i.ibb.co/1GTNHktP/520821395-18400471651114818-3887968629928061291-n.jpg"
        },
        { 
            name: 'Laryssa Santos',
            area: 'Design digital',
            description: 'texto descritivo de cada idealizador',
            img: "https://i.ibb.co/scLbRqq/image.png"
        },
        { 
            name: 'Lazaro Freitas',
            area: 'Design digital',
            description: 'texto descritivo de cada idealizador',
            img: "https://i.ibb.co/Wv3wLd61/image.png"
        },
        { 
            name: 'Thayná Cavalcante',
            area: 'Design digital',
            description: 'Ainda está à procura da sua área de atuação no Design, então não se limita quando encontra novos desafios, como este projeto em questão. Busca sempre aprimorar seus poucos conhecimentos do universo que é o Design.',
            img: "https://i.ibb.co/HTxWgmNh/image.png"
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