import { useState, useEffect } from "react";
import "./Filter.css";

export default function Filter({projects, setFilter}) {
    const [filters, setFilters] = useState({});
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedValue, setSelctedValue] = useState(null);

    useEffect(() => { // Popula os filtros com base nos projetos    
        const newFilters = { // Cria um objeto para armazenar os filtros
            Ano:[...new Set(projects.map((p) => p.ano))].sort((a,b) => b - a), //.map extrai os anos dos projetos; para cada projeto, p.ano retorna o ano do projeto; sort((a,b) => b - a) ordena os anos em ordem decrescente
            Disciplina:[...new Set(projects.map((p) => p.disciplina))].sort(),
            Categoria:[...new Set(projects.flatMap((p) => p.tags))].sort(),
            Autor:[...new Set(projects.map((p) => p.autor))].sort(),
        };
        setFilters(newFilters);
    }, [projects]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const clearFilter = () => {
        setFilter(null);
        setSelctedValue(null);
        setSelectedCategory(null);
    };

    return (
        <div className="filter-container" alt="Filtro de projetos">
            <h3 className="filter-title">Filtrar por:</h3>
            <div className="filter-wrapper">
                <div className="dropdown">
                    <button className="select-button" onClick={() => {
                        setOpenMenu(!openMenu); //
                        setSelectedCategory(null);
                    }}>
                        {selectedValue || "Selecionar"}
                    </button>
                    {openMenu && (
                        <div className="dropdown-menu">
                            <div className="left-column">
                                {Object.keys(filters).map((category) => (<div key={category} onClick={() => handleCategoryClick(category)} className={`filter-item ${selectedCategory === category ? "ativo" : ""}`}
                                > 
                                    {category}
                                </div>
                            ))}
                            </div>

                            {selectedCategory && (
                                <div className="right-column">
                                    {filters[selectedCategory].map((value) => (
                                        <div key={value} onClick={() => {
                                            setFilter({tipo: selectedCategory, value});
                                            setSelctedValue(value);
                                            setOpenMenu(false);
                                            setSelectedCategory(null);
                                        }}
                                        className="value-item"
                                        >
                                            {value}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <button className="clear-button" onClick={clearFilter}> Limpar </button>
            </div>
        </div>
    );
}