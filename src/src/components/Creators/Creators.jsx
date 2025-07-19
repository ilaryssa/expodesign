import './Creators.css';


export default function Creators(){
    const creators = [
        { name: 'Ianara Sítila',        area: 'Design digital',     description: 'texto descritivo de cada idealizador', 
        img: 'https://i.pinimg.com/736x/70/70/2e/70702e6bd949adf95edf39b47d65413c.jpg'},
        { name: 'Laryssa Santos',       area: 'Design digital',     description: 'texto descritivo de cada idealizador', img: 'https://i.pinimg.com/736x/70/70/2e/70702e6bd949adf95edf39b47d65413c.jpg'},
        { name: 'Lazaro Freitas',       area: 'Design digital',     description: 'texto descritivo de cada idealizador', img: 'https://i.pinimg.com/736x/70/70/2e/70702e6bd949adf95edf39b47d65413c.jpg'},
        { name: 'Thayná Cavalcante',    area: 'Design digital',     description: 'texto descritivo de cada idealizador', img: 'https://i.pinimg.com/736x/70/70/2e/70702e6bd949adf95edf39b47d65413c.jpg'},
    ];

    return (
        <section className="creators-section">
            <h3>Idealizadores</h3>
            {creators.map((creator, index) => (
            <article key={index} className="creator-card">
                <img src={creator.img} className='photo-placeholder'naria-label={creator.name}/>
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